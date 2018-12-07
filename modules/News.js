const express = require('express');
const router = express.Router();
const db = require('./db/dbconnection');
const misc = require('./Misc/Misc');
const { check, validationResult } = require('express-validator/check')

// all news
router.get("/", function(req,res){
    db.query("SELECT * FROM news", function(err, results){
        if(err){
            res.json({message: "Something went wrong!!"});
        }
        res.json(results);
    })
})

//news by id
router.get("/:n_id", function(req,res){
    var news_id = req.params.n_id;
    db.query("SELECT * FROM news WHERE news_id = ?",[news_id], function(err, results){
        if(err){
            res.json({message: "Something went wrong!!"});
        }
        if(results == ""){
            res.status(404).json({message: "No news found!!"});
        }else{
            res.json(results);
        }
    })
})

//post news
router.post("/",
            [
                check('title').isLength({min : 10, max :100 }).withMessage('Must be at least 10 character'),
                check('content').not().isEmpty().isLength({ min : 25}),
                check('place').not().isEmpty().isLength({min:3,max:50}).withMessage('Must be at least 3 to 50 character')
            ], 
            function(req,res){
                var title = req.body.title;
                var news = req.body.content;
                var place = req.body.place;
                var time = Date.now();
                //var image_url = "https://steemitimages.com/DQmX3UYjuRAq9xGjeDd7uqijy6AqhTkYNSyLYXFF3kDbmst/Latest-News.jpg";  
                var image_url = req.body.image_url;  
                var uploaded_by = "admin";
                var news_id = misc.RandomNewsIdGen();

                var data = {
                    news_id : news_id,
                    title :title,
                    time : time,
                    place : place,
                    content : news,
                    image : image_url,
                    uploaded_by : uploaded_by
                }

                const error = validationResult(req);
                if(!error.isEmpty()){
                    res.status(422).json({errors : error.array()})
                }else{
                    db.query("INSERT INTO news SET ?", [data], function(err, result){
                        if(err){
                            res.json({message:"Please check your input"})
                        }else{
                            res.send({message:"News added successfully!!"});
                        }   
                    })
                }

                
})

//update news
router.put("/:id", function(req,res){
    res.send("update all news by id : "  + req.params.id);
})

//delete news
router.delete("/", function(req,res){
    res.send("delete all news");
})

module.exports = router;