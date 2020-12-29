import {React,useState,useEffect} from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userpicdemo from '../img/userpicdemo.png'
import {useParams} from 'react-router-dom'
import '../App.css'
import {Card, Button, Container, Media ,Spinner,Dropdown} from 'react-bootstrap'
import Cardfooter from './Cardfooter'
import '../App.css'
import {Link} from 'react-router-dom'


function Posts({data,key}){
  console.log(data);
  const [open,setOpen]=useState(false);  
  
  return (
    <div className="w-100">
      <Card className=" mt-4 mb-4 shadow-lg" id="cardish">
        <Card.Body>
          <Card.Title>
          <Media left href="#" className="d-flex">
       
            <img width={64} height={64} className="mr-3" src={data.postUser.image==='due image'?(userpicdemo):(data.postUser.image)}  style={{borderRadius:'50%'}}/>
            <Media.Body>
              <h5 className="mt-3" style={{textDecoration:'none',color:'#000'}}> <Link to={"/user/"+data.postUser._id}  style={{textDecoration:'none',color:'#000'}}>{data.postUser.name} </Link></h5>
            </Media.Body>
          <div>
          <FontAwesomeIcon className="mt-3" icon="ellipsis-h" onClick={()=>setOpen(!open)}/>
          </div>  
         <div style={{position:'absolute',right:'10px',top:'10%',display:open?'block':'none'}} className="shadow-lg bg-white">
         <Dropdown>
              <>
                  <Dropdown.Item href="#/action-1">Add Friend</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
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

function Userprofile() {
    
    const [post,setposts]=useState([]);
    const [media,getMedia]=useState("");
    const [url,setimageurl]=useState("");
    const [user,setuser]=useState({});
    
    const {id}=useParams();
    console.log(id);
    useEffect(() => {
    
        //console.log(media);
        fetch(`http://localhost:5001/user/${id}`,{
            method:"get",
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        setposts(data.posts);
        setuser(data.res);
        setimageurl(data.res.image);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

   
    return (
      <div className="bg-white" style={{}}>
      <div className=" m-auto d-flex justify-content-center backPic" >
  <div className="ml-5" id="pic" >
  <img className="mr-3 mb-5"  src={ url ?url:userpicdemo} alt="User Pic" style={{boxSizing:'border-box',width:'100%',height:'100%',overflow:'hidden',borderRadius:'50%'}}/>
  </div>
  <div>
  </div>
  </div>
  <h1 id="titlex"  >{user.name}</h1>
  
  <div id="titlex" style={{width:'320px'}} className="container d-flex justify-content-between">
  <div>
   <Button style={{width:'200px'}} className="shadow-lg ">message</Button>
   </div>
   <div>
   <Button style={{width:'70px',outline:'none',border:'1px solid #ccc',background:'#fff'}} className="shadow-lg "  ><FontAwesomeIcon icon="user-plus" className=" font-weight-light text-black-50" style={{color:''}}/></Button>
   </div>
  </div>
  <div id="profile" >
  {
              post.map(data=>(
                
                <Posts data={data} key={data._id} />
              ))
            }
        </div>   
  </div>
  )
}


export default  Userprofile;