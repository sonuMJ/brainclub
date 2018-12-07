const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.port || 5000;
const news = require('./modules/News');
const user = require('./modules/User');
const qA = require('./modules/QA');

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, x-csrf-token, X-Requested-With, Content-Type, Accept");
    next();
})

//lib
app.use(bodyParser.json());  // json input
app.use(bodyParser.urlencoded({ extended : true })) // form-data input

app.use(express.static('public'));

app.use("/news", news);
app.use("/user", user);
app.use("/qa", qA);

app.get("/",function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '/public/') });
})

app.listen(port);

