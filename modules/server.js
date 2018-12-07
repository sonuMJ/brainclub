const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'root',
  password : '',
  database : 'braindb'
});
connection.connect();


app.get('/posts/all', (req, res) => {
  console.log('\n====================================');
  console.log("Connected to /posts/all \t Method:GET");
  var obj = {
    post:[]
  };;
  var post_query = "SELECT * FROM posts ORDER BY timestamp DESC";
  res.setHeader('Content-Type', 'application/json');
  connection.query(post_query, function (err, result) {
    if (err) throw err
    else{
      for(i = 0; i < result.length;i++){
        var timestamp = result[i].timestamp;
        var date = new Date();
        date.setTime(timestamp);
        var formattedDate = date.toJSON().slice(0,10).split('-').reverse().join('/');
        obj.post.push({
          post_id: result[i].post_id,
          member_id: result[i].member_id,
          date: formattedDate,
          query: result[i].query_head,
          body: result[i].query_body
        });
      }
      var res_json = JSON.stringify(obj); 
      res.send(res_json);
    }
  }); 
  console.log('====================================');
});
app.get('/posts/:id', (req, res) => {
  console.log('\n====================================');
  var obj = {
    post:[],
    thread:[]
  };
  var req_id = req.params.id;
  var post_flag = true;
  var post_query = "select * from posts where post_id = ?";
  var thread_query = "SELECT reply_id,reply_to,timestamp,member_id,text FROM threads WHERE reply_to = ?  UNION SELECT t.reply_id,t.reply_to,t.timestamp,t.member_id,t.text FROM threads t JOIN threads m ON m.reply_to = ? WHERE t.reply_to = m.reply_id  ORDER BY timestamp DESC";
  res.setHeader('Content-Type', 'application/json');
  console.log("Connected to /posts \t Method:GET");
  console.log("Inside get");
  console.log("Post id \t"+req_id);
  connection.query(post_query,req_id, function (err, result) {
    console.log("Inside query");
    if (err) throw err
    if(result.length==0){
      post_flag = false
      
    }
    else{
      var timestamp = result[0].timestamp;
      var date = new Date();
      date.setTime(timestamp);
      var formattedDate = date.toJSON().slice(0,10).split('-').reverse().join('/');
      obj.post.push({
        post_id: result[0].post_id,
        member_id: result[0].member_id,
        date: formattedDate,
        timestamp: timestamp,
        query: result[0].query_head,
        body: result[0].query_body
      });

    }
  }); 

    connection.query(thread_query,[req_id,req_id], function (err, result) {
      if (err) throw err

      for(i = 0; i < result.length;i++){
        var replies = {};
        var timestamp = result[i].timestamp;
        var date = new Date();
        date.setTime(timestamp);        
        var formattedDate = date.toJSON().slice(0,10).split('-').reverse().join('/');

        if(result[i].reply_to== req_id){
          obj.thread.push({
            reply_id: result[i].reply_id,
            reply_to: result[i].reply_to,
            member_id: result[i].member_id,
            date: formattedDate,
            timestamp: timestamp,
            message: result[i].text,
            reply: []
          });
        }

      }
      for(i = 0; i < result.length;i++){
        var replies = {};
        var timestamp = result[i].timestamp;
        var date = new Date();
        date.setTime(timestamp);
        var formattedDate = date.toJSON().slice(0,10).split('-').reverse().join('/');
        if(result[i].reply_to!= req_id){
          replies ={
            reply_id: result[i].reply_id,
            reply_to: result[i].reply_to,
            member_id: result[i].member_id,
            date: formattedDate,
            timestamp: timestamp,
            message: result[i].text
          };  
          replyParser(obj,result[i].reply_to,replies);
        }
      }
      if(post_flag==false){
        res.send(JSON.stringify({response: "Failed",description: "Error: Invalid post id"}));
      }
      else{
        var res_json = JSON.stringify(obj); 
        res.send(res_json);
      }

  });
  console.log('====================================');
});
function replyParser(obj,reply_to,replies){
  for (var j in obj.thread) {
    if (obj.thread[j].reply_id == reply_to) {
        obj.thread[j].reply.push(replies);
        break;
    }
  }
}

app.post('/posts', (req, res) => {
  console.log('\n====================================');
  console.log("Connected to /posts \t Method:POST");
  console.log(req.body);
  
  var generatedID = idGenerator("P_",6);
  var post_query = "INSERT INTO posts VALUES(?,?,?,?,?)";
  var req_memberid = req.headers.member_id;
  var req_head = req.headers.head;
  var req_body = req.body.content;
  var date = new Date(); 
  var timestamp = date.getTime();
  console.log("Member id \t"+req_memberid);
  console.log("head \t"+req_head);
  console.log("body \t"+req_body);
  console.log("timestamp \t"+timestamp);
  connection.query(post_query,[generatedID,req_memberid,timestamp,req_head,req_body], (err, result) => {
    console.log("Inside query");
    if (err) throw err
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ response: "Success",description: "Query posted successfully"}));
  })
  console.log('====================================');
});
app.post('/reply', (req, res) => {
  console.log('\n====================================');
  console.log("Connected to /reply \t Method:POST");
  var generatedID = idGenerator("R_",6);
  console.log(req.body.content);
  
  var post_query = "INSERT INTO threads VALUES(?,?,?,?,?)";
  var req_memberid = req.headers.member_id;
  var req_reply_to = req.headers.reply_to;
  var req_body = req.body.content;
  var date = new Date(); 
  var timestamp = date.getTime();
  console.log("Member id \t"+req_memberid);
  console.log("reply_to \t"+req_reply_to);
  console.log("body \t"+req_body);
  console.log("timestamp \t"+timestamp);
  connection.query(post_query,[generatedID,req_reply_to,req_memberid,timestamp,req_body], (err, result) => {
    console.log("Inside query");
    if (err) throw err
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ response: "Success",description: "Reply posted successfully"}));
  })
  console.log('====================================');
});
app.get('/search',(req,res) => {
  console.log('\n====================================');
  console.log("Connected to /search \t Method:GET"); 

  var search_query = req.headers.search_query;
  var obj = {
    post:[]
  };;
  console.log("Search query \t"+search_query);
  var post_query = "SELECT * FROM posts WHERE MATCH(query_head, query_body)AGAINST(? IN NATURAL LANGUAGE MODE)";
  res.setHeader('Content-Type', 'application/json');
  connection.query(post_query,search_query, function (err, result) {
    if (err) throw err
    else{
      for(i = 0; i < result.length;i++){
        var timestamp = result[i].timestamp;
        var date = new Date();
        date.setTime(timestamp);
        var formattedDate = date.toJSON().slice(0,10).split('-').reverse().join('/');
        obj.post.push({
          post_id: result[i].post_id,
          member_id: result[i].member_id,
          date: formattedDate,
          query: result[i].query_head,
          body: result[i].query_body
        });
      }
      var res_json = JSON.stringify(obj); 
      res.send(res_json);
    }
  }); 
  console.log('====================================');
});
function idGenerator(prefix,limit){
  var text = prefix;
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < limit; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

app.listen(port, () => console.log(`Listening on port ${port}`));