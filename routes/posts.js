const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Posts=mongoose.model('Posts');
const verifyUser=require('../middleware/token')


router.get('/posts',verifyUser,(req,res)=>{
    Posts.find()
    .populate("postUser","id name")
    .then(post=>{
        res.statusCode=200;
        return res.json({post});
    })
})
router.post('/create',verifyUser,(req,res)=>{

    const{title,body,image}=req.body;

    console.log(title,body,image);

    const post=new Posts({
        title:title,
        body:body,
        image:image,
        postUser:req.user
    })
    post.save()
    .then(posts=>{
        res.statusCode=200;
        console.log(posts);
        return (res.json({success:"post updated",userPost:posts}));
    }) 

});

router.get("/mypost",verifyUser,(req,res)=>{
    Posts.find({postUser:req.user._id})
    .populate("postUser","_id name")
    .then(posts=>{
        
        return res.json({posts});
        
       
    })
    .catch(err=>{
        res.json({error:err})
    })
})

module.exports=router;