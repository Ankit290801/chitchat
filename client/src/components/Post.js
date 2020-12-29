import {React ,useEffect , useState} from 'react'
import {Card, Button, Container} from 'react-bootstrap'

 function Post() {
    
    const [body,getBody]=useState("");
    const [media,getMedia]=useState("");
    const [imageurl,setimageurl]=useState("");
    
    useEffect(() => {
       if(imageurl)
       {
        fetch("http://localhost:5001/create",{
            method:"post",
            headers:{
                'content-type':'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            },
            body:JSON.stringify({
                title:"my posts",
                body:body,
                image:imageurl

            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
       }
    }, [imageurl])

    const createPost=()=>{
        console.log(media);
        if(media==='')
        {
            fetch("http://localhost:5001/create",{
                method:"post",
                headers:{
                    'content-type':'application/json',
                    'Authorization':'Bearer '+ localStorage.getItem('jwt') 
                },
                body:JSON.stringify({
                    title:"my posts",
                    body:body,
                    image:imageurl
    
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
               
        }
       else
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
            console.log(data);
        })
       }
       

    }
    
    return (
        <div style={{paddingTop:'70px'}}>

         <>
        <Card id="post" className="container my-3" style={{ background:'#fff',marginTop: '20px' }}>
        <Card.Body>
    <textarea type="text" value={body} onChange={(e)=>getBody(e.target.value)} placeholder="write about something" style={{width:'100%',height:'100px'}}></textarea> 
    
    <div className=" d-flex justify-content-around">
  
   <input  variant="primary" type="file" onChange={(e)=>getMedia(e.target.files[0])}></input>
    <Button onClick={()=>createPost()} variant="primary">Post</Button>
    </div>
     
    </Card.Body>
 </Card>

</>            
        </div>
    )
}


export default  Post;