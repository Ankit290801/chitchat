const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model('Users');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const {JWT_SECRET}=require('../config');
const verifyUser=require('../middleware/token')

router.get('/dashboard',verifyUser,(req,res)=>{

    //const {email , password}=req.body;
    console.log(req.user);
    res.send("hello there!")

})

router.post('/login',(req,res)=>{

    const {email , password}=req.body;
    console.log(email + password);
    
    User.findOne({email:email})//, password:bcrypt.hash(password,10)
    .then(saved=>{
        if(saved)
        {
        res.statusCode=200;  
        const token=jwt.sign({_id:saved._id},JWT_SECRET)
        res.json({success:"user found",token:token,user:{saved}});

        console.log('found');

        }else{
            res.statusCode=403;  
            res.json({err:"sorry not found"});    
            console.log('not found');
        }
    })
})


module.exports=router;