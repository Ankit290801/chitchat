import { React ,useState,useEffect} from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import {Card, Button, Container, Media ,Spinner,Form} from 'react-bootstrap'

 const Cardfooter=props=>{
    
    const [open,setopen]=useState(false);
    const [text,settext]=useState("");
    const [commenttext,setcomment]=useState("");    
    const [user,setuser]=useState({});
    const [image,setimageurl]=useState("");
   useEffect(()=>{
    fetch("http://localhost:5001/dashboard",{
        method:"get",
        headers:{
            'Authorization':'Bearer '+ localStorage.getItem('jwt') 
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    setuser(data.user);
    setimageurl(data.user.image);
    })
    .catch(err=>{
        console.log(err);
    })
   },[])
    const openComment=()=>{
       
        setopen(!open)

    }
    const commentpost=(text,postId)=>{
       //console.log(text + postId)
       setcomment(text);
        fetch("http://localhost:5001/comment",{
            method:"post",
            headers:{
                'content-type':'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            },
            body:JSON.stringify({
               _id:postId,
               text

            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    
    return (
        <div>
       <div style={{display:open?'block':'none'}}>
       <div className="shadow-lg " style={{overflow:'scroll',height:'500px',width:'90%',background:'#fff',bottom:'20%',position:'absolute'}}>
       <div style={{}}>
       <div >
            {props.dataset.map(comments=>{
                    return (
                        <div className="d-flex flex-row" style={{justifyContent:(comments.postUser._id==user._id)?'flex-end':'left'}}>
                       <div style={{padding:'15px',borderRadius:'20px',background:'#ddd'}}>
                        <div className="d-flex justify-content-around ">
                       <div>
                       <img src= {comments.postUser.image} height="40px" width="40px" className=" rounded-circle"/>    
                        </div>
                       <div className="mx-3 align-self-center font-italic font-smaller">
                        {comments.postUser.name}   
                        </div>
                        </div>
                        <hr />
                        {comments.text}
                        </div>
                       
                        </div>
                    )
                })
            }
            <div className="container w-100 my-3 bg-red">
            <hr />    
            <div >
      <Form>
      <div>
        <div className="d-flex">
       <input onChange={(e)=>settext(e.target.value)} type='text' placeholder='Write a comment' name='comment' style={{width:'100%',height:'45px',background:'#ddd',color:'#000',borderRadius:'20px',outline:'none',border:'none',padding:'15px'}}/>   
        <label for="buttonpost" style={{cursor:'pointer',right:'15%',top:'50%',transform:'translate(-250%,20%)'}}><FontAwesomeIcon style={{height:'30px',width:'25px',color:'#0006'}} icon="paper-plane"/>
        </label>
       </div>
      </div>
        <Button style={{display:'none'}} id="buttonpost" onClick={()=>{commentpost(text,props.exodus)}}>click</Button>
       </Form>
        
      </div>            </div>     
        </div>
       </div>
      </div>
     
        </div>  
        <div className="container d-flex justify-content-between ">
        <div className="d-flex">
        <div><FontAwesomeIcon style={{height:'30px',width:'30px',color:'#0006'}} icon="thumbs-up"/></div>
        <h5 className="align-self-auto m-1" style={{color:'0006',textTransform:'capitalize'}}>like</h5>
        </div>                
        <div className="d-flex" onClick={(e)=>openComment()}>
        <div><FontAwesomeIcon style={{height:'30px',width:'30px',color:'#0006'}} icon="comment"/></div>
        <h5 className="align-self-auto m-1"  style={{color:'0006',textTransform:'capitalize'}}>comment</h5>
        </div>
        <div className="d-flex">
        <div><FontAwesomeIcon style={{height:'30px',width:'30px',color:'#0006'}} icon="share"/></div>
        <h5 className="align-self-auto m-1"  style={{color:'0006',textTransform:'capitalize'}}>share</h5>
        </div>
        </div>
        <div className="container w-100 mt-2">
        <h5 style={{fontSize:'15px'}}>{commenttext}</h5>     
      <div >
      <Form>
      <div>
        <div className="d-flex">
       <input onChange={(e)=>settext(e.target.value)} type='text' placeholder='Write a comment' name='comment' style={{width:'100%',height:'45px',background:'#ddd',color:'#000',borderRadius:'20px',outline:'none',border:'none',padding:'15px'}}/>   
        <label for="buttonpost" style={{cursor:'pointer',right:'15%',top:'50%',transform:'translate(-250%,20%)'}}><FontAwesomeIcon style={{height:'30px',width:'25px',color:'#0006'}} icon="paper-plane"/>
        </label>
       </div>
      </div>
        <Button style={{display:'none'}} id="buttonpost" onClick={()=>{commentpost(text,props.exodus)}}>click</Button>
       </Form>
        
      </div>
        </div>
        </div>
        
    )
}

export default Cardfooter;