const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model('Users');

router.route('/')
.post((req,res)=>{
console.log(req.body);
const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})
user.save()
.then(data=>{
    res.statusCode=200;
    console.log("saved user");
})

})

module.exports=router;