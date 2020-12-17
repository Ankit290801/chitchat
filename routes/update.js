// const express=require('express');
// const router=express.Router();
// const mongoose=require('mongoose');
// const User=mongoose.model('Users');
// const verifyUser=require('../middleware/token')


// router.post('/updatepic',verifyUser,(req,res)=>{

//     picture =req.body;
//     User.findByIdAndUpdate(req.user._id,{
//     image:picture
// },
// {
//     new:true
// })
// .exec(err,res=>{
//     if(err)
//     {
//         res.status(422).json({error:err})
//     }
//     else
//     {
//         res.status(200).json({resultMessage:res})
//     }
// })

// })