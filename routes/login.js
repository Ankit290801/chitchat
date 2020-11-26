const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model('Users');
var email1,password1;
//router.route('/')
router.post('/login',(req,res)=>{

    const {email , password}=req.body;
    console.log(email + password);
    email1=email;password1=password;
    User.findOne({email:email , password:password})
    .then(saved=>{
        if(saved)
        {
        res.statusCode=200;  
        res.json(saved);    
        console.log('found');

        }
       
    })

})
router.get('/dashboard',(req,res)=>{

    //const {email , password}=req.body;
    console.log(email1 + password1);
    User.findOne({email:email1 , password:password1})
    .then(saved=>{
        if(saved)
        {
        res.statusCode=200;  
        res.json(saved);    
        console.log(' res found');

        }
       
    })

})

module.exports=router;