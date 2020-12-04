
const mongoose=require('mongoose');
const User=mongoose.model('Users');
const jwt=require('jsonwebtoken');
const{JWT_SECRET}=require('../config');

module.exports=(req,res,next)=>{

const {authorization}=req.headers;
if(authorization)
{
    const token=authorization.replace("Bearer ","");
    console.log(token);
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
        //return res.json({error:"user not logged in"});   
        res.send("error");
    }
    const {_id}=payload;
    User.findById(_id)
    .then(data=>{
    req.user=data;
    next();
    })
        
    })
}else
{
 res.statuscode=401;
return res.json({error:"user not logged in"});   
}

}