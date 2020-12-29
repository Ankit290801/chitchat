import {React,useState,useEffect} from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userpicdemo from '../img/userpicdemo.png'
import '../App.css'
function Myprofile() {
    
    const [media,getMedia]=useState("");
    const [url,setimageurl]=useState("");
    const [user,setuser]=useState({});
    useEffect(() => {
    
        //console.log(media);
        fetch("http://localhost:5001/dashboard",{
            method:"get",
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
      //      setposts(data.post);
        setuser(data.user);
        setimageurl(data.user.image);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    useEffect(()=>{
        console.log(media);
        if(media)
        {
            const data=new FormData();
                data.append('file',media);
                data.append('upload_preset','chitchat');
                data.append('cloud_name','bhaskar2911');
                fetch('https://api.cloudinary.com/v1_1/bhaskar2911/image/upload',{
                    method:'post',
                    body:data
                })
                .then(res=>res.json())
                .then(data=>{
        
                    setimageurl(data.url);
                    //updateProfile();
                    console.log(data);
                })
        }
       
    },[media])
    useEffect(()=>{
        console.log(url);
        if(url && media)
               {
                fetch("http://localhost:5001/updatepic",{
                    method:"put",
                    headers:{
                        'content-type':'application/json',
                        'Authorization':'Bearer '+ localStorage.getItem('jwt') 
                    },
                    body:JSON.stringify({
                        
                        image:url
        
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                   // setimageurl(data);
                })
               }
    },[url])   
    
   
    return (
        <div className="bg-white">
            <div className=" m-auto d-flex justify-content-center backPic" >
        <div className="ml-5" id="pic" >
        <img className="mr-3 mb-5"  src={ url ?url:userpicdemo} alt="User Pic" style={{boxSizing:'border-box',width:'100%',height:'100%',overflow:'hidden',borderRadius:'50%'}}/>
        </div>
        <input id="fileUpload" variant="primary" type="file" style={{display:'none'}} onChange={(e)=>getMedia(e.target.files[0])} />

       <label  for="fileUpload" id="icon" className="align-self-center rounded-circle" style={{}}>
       <FontAwesomeIcon  className="icon " icon="pen" id="pen" style={{}} />
        </label>
        <div>
        </div>
        </div>
        <h1 id="titlex" style={{}} >{user.name}</h1>
        </div>
    )
}


export default  Myprofile;