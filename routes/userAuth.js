const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model('Users');
const bcrypt=require('bcryptjs');

router.route('/')
.post((req,res)=>{

console.log(req.body);
User.findOne({email:req.body.email})
.then(user=>{
    if(user)
    {
        
        //res.statusCode=422;
        return (res.json({error:"user already exits"}));
    }
    else
    {const {name,email,password,cpassword}=req.body;
    if(!name || !password || !email)
    {
        return (res.json({success:"fill all the fields"}))
        console.log("saved not user");
    }else
    if(password !== cpassword)
    {
        return (res.json({success:"pasword not validated"}))
    } else  
    {bcrypt.hash(password,10)
        .then(passcode=>{
        const user=new User({
                name:name,
                email:email,
                password:passcode
        })
            user.save()
        .then(data=>{
                //res.statusCode=200;
                return (res.json({success:"user saved"}))
                console.log("saved user");
            })
        })
    }
    }
})
.catch(err=>{
    console.log("err");
})
})



module.exports=router;