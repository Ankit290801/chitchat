import { React ,useState,useEffect} from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import {Card,Navbar,Nav, Button, Container, Media ,Spinner,Form} from 'react-bootstrap'
import { NavLink ,useHistory, Route} from 'react-router-dom'

 const Cardfooter=props=>{
    
    let count;
    const [open,setopen]=useState(false);
    const [text,settext]=useState("");
    const [commenttext,setcomment]=useState("");    
    const [user,setuser]=useState({});
    const [likeBox, setLikeBox] = useState(false);
    const [image,setimageurl]=useState("");
    const [emoji,setemoji]=useState("");
    const [emotext,setemotext]=useState("Like");
    const [Color,setColor]=useState(false);

    useEffect(()=>{
        fetch("http://localhost:5001/dashboard",{
            method:"get",
            headers:{
            'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })

        .then(res=>res.json())

        .then(data=>{
             setuser(data.user);
            setimageurl(data.user.image);
            //count=data.likes
            console.log(props.like.length);
            props.like.map((set,index)=>{
                if(set.postUser._id==data.user._id)
                {
                    setemoji(props.like[index].reaction.emoji);
                    setemotext(props.like[index].reaction.emotext);
                }
            })
           
           // console.log(x);
        })

        .catch(err=>{
            console.log(err);
        })
    },[])

    const openComment=()=>{
        setopen(!open)
    }
    const setValue=(comm,index,postId)=>{
        setemoji(index);
        setemotext(comm);
        fetch("http://localhost:5001/like",{
            method:"post",
            headers:{
                'content-type':'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            },
            body:JSON.stringify({
               _id:postId,
               reaction:{
                   emoji:index,
                   emotext:comm
               }
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
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
    
    <div style={{transform:'scale(0.9)'}}>
        <div className="text-capitalize d-flex justify-content-between font-weight-bold mt-2">
            <div className="mx-2">
                {emoji?`reacted by you and ${props.like.length} other`:`liked by ${props.like.length} others`}
            </div>

            <div className="" style={{cursor:'pointer'}} onClick={(e)=>openComment()}>
                {props.dataset.length==0?'':`${props.dataset.length} Comments`}
            </div>
        </div>
         <hr />
        <div style={{display:open?'block':'none',boxSizing:'border-box'}}>
       
        <Navbar fixed="bottom" className="" bg="dark" style={{color:'#fff',fontWeight:'lighter',textTransform:'uppercase'}}>
                       
                              
                            
                            <div className="d-flex justify-content-center">
                                <Form>
                                    <div>
                                        <div className="d-flex">
                                            <input onChange={(e)=>settext(e.target.value)} type='text' placeholder='Write a comment' name='comment' style={{margin:'auto',width:'100%',height:'45px',background:'#ddd',color:'#000',borderRadius:'20px',outline:'none',border:'none',padding:'15px 60px'}}/>   
                                            <label for={props.exodus} style={{cursor:'pointer',right:'15%',top:'50%',transform:'translate(-250%,20%)'}}><FontAwesomeIcon style={{height:'30px',width:'25px',color:'#0006'}} icon="paper-plane"/>
                                            </label>
                                        </div>
                                    </div>
                                    <Button style={{display:'none'}} id={props.exodus} onClick={()=>{commentpost(text,props.exodus)}}>click</Button>
                                </Form>
                            </div>
                            
                   
                        </Navbar>
        
            <div className="shadow-lg " style={{overflowY:'scroll',height:'500px',width:'100%',background:'#fff',bottom:'20%',position:'absolute'}}>
          
                <div style={{}}>
                    <div>
                       {props.dataset.map(comments=>{
                            return (
                                <div className="d-flex flex-row" style={{justifyContent:(comments.postUser._id==user._id)?'flex-end':'left'}}>
                                   <div className="d-flex ">
                                   <div className="mx-1">
                                        <img src= {comments.postUser.image} height="40px" width="40px" className=" rounded-circle"/>    
                                    </div>
                                    <div className="my-2 " style={{padding:'5px',borderRadius:'0 20px 20px 20px',background:'#ddd',width:'250px'}}>
                                        <div className="mx-3 align-self-center  text-capitalize font-weight-bold font-smaller">
                                                {comments.postUser.name}   
                                            </div>
                                            <div style={{margin:'5px'}}>
                                            {comments.text}
                                                </div>
                                       
                                    </div>
                                       </div>
                                   
                                   
                       
                                </div>
                            )
                        })
                        }
                       
                       </div>     
                 </div>
            </div>
           
        </div>
                   
        <div className="emoji-box shadow-lg" 
         onMouseEnter={() => setLikeBox(likeBox)}
         onMouseLeave={() => setLikeBox(!likeBox)}
        style={{display:likeBox?'block':'none',position:'absolute'}}>
                    <nav className="emojis">
                        <div className="emoji" onClick={()=>setValue("like","0",props.exodus)}>&#x1F44D;</div>
                        <div className="emoji" onClick={()=>setValue("love","1",props.exodus)}>&#x1F60D;</div>
                        <div className="emoji" onClick={()=>setValue("happy","2",props.exodus)} >&#x1F917;</div>
                        <div className="emoji" onClick={()=>setValue("sad","3",props.exodus)}>&#x1F62D;</div>
                        <div className="emoji" onClick={()=>setValue("angry","4",props.exodus)}>&#x1F620;</div>
                    </nav> 
                    </div> 

        <div className="container d-flex justify-content-between ">
        <div className="d-flex"  
                onClick={()=>setValue("like","0")}
                style={{cursor:'pointer'}}
                onMouseEnter={() => setLikeBox(!likeBox)}
                onMouseLeave={() => setLikeBox(!likeBox)}>
                    
        <div >
              <div>
                      <FontAwesomeIcon style={{height:'30px',width:'30px',color:emoji=="0"?'#2e86de':'#0006',display:emoji==""|| emoji=="0"?'block':'none'}} icon="thumbs-up"/>

                        <div className="emoji" style={{display:emoji==1?'block':'none'}}>&#x1F60D;</div>
                        <div className="emoji" style={{display:emoji==2?'block':'none'}}>&#x1F917;</div>
                        <div className="emoji" style={{display:emoji==3?'block':'none'}}>&#x1F62D;</div>
                        <div className="emoji" style={{display:emoji==4?'block':'none'}}>&#x1F620;</div>
                   
              </div>
            </div>
                    <h5 className="align-self-auto m-1" style={{color:emoji==""?'0006':emoji=="0"?'#2e86de':'#feca57',textTransform:'capitalize'}}>{emotext}</h5>    
        </div>            
        <div className="d-flex mx-3" onClick={(e)=>openComment()} style={{cursor:'pointer'}}>
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
      <div className="">
        <div className="d-flex">
       <input onChange={(e)=>settext(e.target.value)} type='text' placeholder='Write a comment' name='comment' style={{width:'100%',height:'45px',background:'#ddd',color:'#000',borderRadius:'20px',outline:'none',border:'none',padding:'15px',margin:'auto'}}/>   
        <label for={props.exodus} style={{cursor:'pointer',right:'15%',top:'50%',transform:'translate(-250%,20%)'}}><FontAwesomeIcon style={{height:'30px',width:'25px',color:'#0006'}} icon="paper-plane"/>
        </label>
       </div>
      </div>
        <Button style={{display:'none'}} id={props.exodus} onClick={()=>{commentpost(text,props.exodus)}}>click</Button>
       </Form>
        
      </div>
        </div>
        </div>
        
    )
}

export default Cardfooter;