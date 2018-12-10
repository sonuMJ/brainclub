import React from 'react';
import { Link } from 'react-router-dom';
import './SingleQA.css';

class SingleQA extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            articles : [],
            threads: [],
            reply: [],
            isFetching: true,
            child: "",
            post_id: this.props.match.params.id
        }
      }
      componentDidMount() {
          this.renderHome();
          window.scrollTo(0, 0);
      }
      renderHome(){
        console.log("rendering home");
        
        fetch('/qa/posts/'+this.state.post_id)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            articles: json.post,
            threads: json.thread,
            isFetching:false
          });
          console.log(this.state.articles);
          console.log(this.state.threads);
          
        });
      }
      handleCommentChange(event){
        this.setState({
          comment : event.target.value
        });
      }
      viewReplies(data){
        if(this.state.viewReplyID === data.reply_id){
          this.setState({
            viewReplyID : "",
            child : ""
          });
        }
        else{
          this.setState({
            reply: data.reply,
            viewReplyID : data.reply_id,
            child : ""
          });
        }
    
        
      }
      replyClick(data){
        this.setState({
          clickedID : data.reply_id,
        });
        this.setState({
          viewReplyID:"",
          child: 
          <div class="form-group Post_form">
                <textarea class="form-control" onChange={this.handleCommentChange.bind(this)} rows="5" id="comment" autoFocus="true"></textarea>
                <div class="comment_button">
                    <button type="button" class="btn btn-primary" onClick={(e)=>{this.postReply(data,data.reply_id,this.state.comment)}}>Reply</button>
                </div>
          </div>
        });
      }
      validate(id,content){
        var bool = true;
        if(id=="")
        {
          alert("id empty");
          bool = false;
        }
        else{
          if(content=="")
          {
            alert("content empty");
            bool = false;
          }
          else{
            if (content.length>300){
              alert("content exceed length");
              bool = false;
            }
            if (content.length <2){
              alert ("content too small");
              bool = false;
            }
          }
        }
        return bool;
      }
      postReply(data,id,content){
        console.log('====================================');
        console.log(id);
        console.log(content);
    
        if(this.validate(id,content)){
          fetch('/qa/reply', {
            method: 'POST',
            body: JSON.stringify({
              "content":content
            }),
            headers: {
                'Content-Type': 'application/json',
                'member_id': '5726',
                'reply_to': id
            }
          }).then(response => response.json())
            .then(json => {
                console.log(json);
            if(String(json.response) === 'Success'){
                  console.log("User insertion successfully");  
                  this.setState({
                      status:"Success",
                      description:"User added successfully",
                      child:""
                  });
            }
            else{
                  console.log("User insertion unsuccessfull");
                  this.setState({
                      status:"Failed",
                      description:"User insertion unsuccessfull",
                      child:""
                  });
            }
          }).catch(err => err);
          setTimeout(()=>{this.renderHome()},500);
        }
    
        console.log('====================================');
      }
      timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
          return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
      }
      render() {
        var context = this;
        var post = this.state.articles.map(function(data) {
    
          console.log(data.post_id);
          return (
            <div className="row query_card"  key={data.post_id}>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                    <img src="/images/user_ico.png" alt="Unavailable" className="img-responsive Post_user_ico" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                    <h3 className="Post_head">{data.query}</h3>    
                    <p>{context.timeSince(data.timestamp)}</p> 
                    <p className="Post_body">{data.body}</p>                 
                </div>
                <div class="form-group Post_form">
                          <textarea class="form-control" rows="5" ref="comment" autoFocus="true"></textarea>
                          <div class="comment_button">
                              <button type="submit" class="btn btn-primary" onClick={()=>{
                                context.setState({
                                  clickedID:""
                                });
                                context.postReply(data,data.post_id,context.refs.comment.value)
                                context.refs.comment.value = ""
                                }}>Reply</button>
                          </div>
                </div>
    
            </div>
          )
        });
        var reply = this.state.reply.map(function(data) {
    
          return (
            <div className="row Post_thread_reply" key={data.post_id}>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                    <img src="/images/user_ico.png" alt="Unavailable" className="img-responsive Post_user_ico" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                    <h5 className="Post_head">{data.member_id}</h5>    
                    <p>{context.timeSince(data.timestamp)}</p> 
                    <p className="Post_body">{data.message}</p>                 
                </div>
            </div>
          )
        });
        var thread = this.state.threads.map(function(data) {

            return (
              <div className="row Post_thread" key={data.post_id}>
                  <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                      <img src="/images/user_ico.png" alt="Unavailable" className="img-responsive Post_user_ico" />
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                      <h5 className="Post_head">{data.member_id}</h5>    
                      <p>{context.timeSince(data.timestamp)}</p> 
                      <p className="Post_body">{data.message}</p> 
                      {data.reply.length!=0 && <a className="Post_thread_viewreply" onClick={() =>context.viewReplies(data)}>{data.reply.length}&nbsp;Reply &nbsp;<span class="glyphicon glyphicon-menu-down"></span></a>}              
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center Post_thread_comment">
                      <img src="/images/replyBtn.png" className="Post_thread_comment_reply" style={{float: 'right'}} alt="Unavailable"  onClick={(e) =>{
                        e.preventDefault();
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        context.replyClick(data);
                        }}/>
                  </div>
                  {data.reply_id === context.state.clickedID && <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginBottom: 20+'px'}}  >{context.state.child}</div>}
                  
                  {data.reply != "" && data.reply_id === context.state.viewReplyID &&<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/>{reply}</div>}
              </div>
            )
          });
      
      
          return (
            <div className="Post_main">
              <div className="container-fluid Post_div">
                 {/* <h1>Hello => {this.state.post_id}</h1> */}
                 {this.state.articles.length != 0 && !this.state.isFetching && <div>{post}</div>}
                 {/* {this.state.isFetching && <Loader/>} */}
      
              </div>
              <div className="container-fluid" style={{marginTop:20+'px'}}>
                {this.state.articles.length != 0 && !this.state.isFetching && <div>{thread}</div>}
                {/* {this.state.isFetching && <Loader/>} */}
              </div>
            </div>
       
            );
        }
      }
      export default SingleQA;