const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const PostSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
body:{
    type:String,
    required:false
},
image:{
    type:String,
    required:false,
    default:'no image'
},
postUser:{
    type:ObjectId,
    ref:"Users"
}
})
module.exports=mongoose.model('Posts',PostSchema);