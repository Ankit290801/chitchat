import {React,useState , useEffect} from 'react'
import {Card, Button, Container, Media ,Spinner,Dropdown} from 'react-bootstrap'
import './fontawesome/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Status from './Post'
import logo from '../img/logo.jpeg'
import userpicdemo from '../img/userpicdemo.png'
import Cardfooter from './Cardfooter'
import {Link} from 'react-router-dom'
import '../App.css'
function Posts({data,key}){
console.log(data);
const [open,setOpen]=useState(false);  

return (
  <div className="">
    <Card className=" mt-4 mb-4 shadow-lg mb-3" id="cardish">
      <Card.Body>
        <Card.Title>
        
        <Media left href="#" className="d-flex" style={{paddingBottom:'5px'}}>
     
          <img width={64} height={64} className="mr-3" src={data.postUser.image==='due image'?(userpicdemo):(data.postUser.image)}  style={{borderRadius:'50%'}}/>
          
          <Media.Body>
            <h5 className="mt-3" style={{textDecoration:'none',color:'#000'}}> <Link to={"/user/"+data.postUser._id}  style={{textDecoration:'none',color:'#000'}}>{data.postUser.name} </Link></h5>
            <small>28/12/2020</small>   
          </Media.Body>
          
        <div>
        <FontAwesomeIcon className="mt-3" icon="ellipsis-h" onClick={()=>setOpen(!open)}/>
        </div>  
       <div style={{position:'absolute',right:'10px',top:'10%',display:open?'block':'none'}} className="shadow-lg bg-white">
       <Dropdown>
            <>
                <Dropdown.Item href="#/action-1">Add Friend</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Save Post</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
            </>
        </Dropdown> 
       </div>
       
        </Media>
        </Card.Title>
       
        <Card.Text style={{textTransform:'capitalize',fontSize:'15px'}}>
       {data.body}
      </Card.Text>
        <hr />
        <img  src={data.image} id="image" style={{}}/> 
        {/* style={{ width: '500px',height:'400px',margin:'auto' }}/> */}
    <Cardfooter exodus={data._id} dataset={data.comments} like={data.likes}/>
   </Card.Body>
 </Card>
  </div>
);
}
function Home() {
    
  const [post,setposts]=useState([]);
  const [loader,setloader]=useState(0)
  useEffect(()=>{
    setloader(0);
    fetch("http://localhost:5001/posts",{
            method:"get",
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.post);
            setloader(0);
            setposts(data.post);
        })
  },[])
  
  return (
        <div style={{backgroundColor:"#ccc"}}>
           <Status />
           <div style={{display:loader==1?'block':'none',position:'absolute',zIndex:'100',background:'red',width:'100%',opacity:'0.5'}}>
           <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(50%)'}}>
           <Spinner animation="border" role="status" />
            </div>
           </div>
           
            <>
            
          {
            post.map(data=>(
              
              <Posts data={data} key={data._id} />
            ))
          }
          
          
          
         
             </>
         </div>
       
    )
}

export default Home;