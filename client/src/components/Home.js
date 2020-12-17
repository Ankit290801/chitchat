import {React,useState , useEffect} from 'react'
import {Card, Button, Container, Media ,Spinner} from 'react-bootstrap'
import './fontawesome/index'
import Status from './Post'
import logo from '../img/logo.jpeg'
import userpicdemo from '../img/userpicdemo.png'
import Cardfooter from './Cardfooter'

function Posts({data,key}){
//console.log(data);
  return (
  <div>
    <Card className="container mt-4 mb-4" style={{ width: '580px', borderRadius: '20px'}}>
      <Card.Body>
        <Card.Title>
        <Media left href="#">
          <img width={64} height={64} className="mr-3" src={data.postUser.image==='due image'?(userpicdemo):(data.postUser.image)}  style={{borderRadius:'50%'}}/>
          <Media.Body>
            <h5 className="mt-3">{data.postUser.name}</h5>
          </Media.Body>
        </Media>
        </Card.Title> 
        <Card.Img variant="top" src={data.image}  style={{ width: '500px',height:'400px',margin:'auto' }}/>
     <Card.Text>
       {data.body}
     </Card.Text>
    <Cardfooter exodus={data._id} dataset={data.comments}/>
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
  },[post])
  
  return (
        <div style={{backgroundColor:"#ccc"}}>
           <Status />
           <div style={{display:loader==1?'block':'none',position:'absolute',zIndex:'100',background:'red',width:'100%',opacity:'0.5'}}>
           <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(50%)'}}>
           <Spinner animation="border" role="status" />
            </div>
           </div>
           
            <Container>
            
          {
            post.map(data=>(
              
              <Posts data={data} key={data._id} />
            ))
          }
          
          
          
         
             </Container>
         </div>
       
    )
}

export default Home;