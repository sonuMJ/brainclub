const express = require('express');
const db = require('./db/dbconnection');
const { check, validationResult } = require('express-validator/check');
const misc = require('./Misc/Misc');
const router = express.Router();

router.post("/register", 
            [
                check('username').not().isEmpty().isLength({min : 3, max :30 }).withMessage('Username must be at least 3 character'),
                check('email').isEmail().withMessage('Please enter a valid email').not().isEmpty().withMessage('Please enter email').isLength({ max : 50}),
                check('password').not().isEmpty().isLength({min:8,max:40}).withMessage('Password must be at least 8 character')
            ],
            function(req, res){
                var username= req.body.username;
                var email = req.body.email;
                var password = req.body.password;
                var user_id = misc.RandomIdGen();

                var userData = {
                    username : username,
                    email : email,
                    password : password,
                    user_id : user_id
                }

                const error = validationResult(req);
                if(!error.isEmpty()){
                    res.status(422).json({errors : error.array()});
                }else{
                    res.json(userData);
                }
})

module.exports = router;