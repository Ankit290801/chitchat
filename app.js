const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const {MONGO_URI}=require('./config');
var cors = require('cors')

require("./models/users");
require("./models/posts");
Port=process.env.PORT || 5001;

const userAuth=require('./routes/userAuth');
const login=require('./routes/login');
const postRoute=require('./routes/posts');

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected",()=>{
    console.log("database connnceted");
})
mongoose.connection.on("error",(err)=>{
    console.log("error connecting to the database",err);
})

app.use(cors())

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//269g0sHgRHJoXeJU

app.use('/signup',userAuth);
app.use(login);
app.use(postRoute);


app.listen(Port,()=>{
    console.log("server connected");
})