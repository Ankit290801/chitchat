import {React,useState , useEffect} from 'react'
import {Card, Button, Container, Media} from 'react-bootstrap'
import './fontawesome/index'
import Status from './Post'
import logo from '../img/logo.jpeg'
import userpicdemo from '../img/userpicdemo.png'

function Posts({data}){
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
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
  </div>
);
}
function Mypost() {
    
  const [post,setposts]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5001/mypost",{
            method:"get",
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.posts);
            setposts(data.posts);
        })
  },[])
  
  return (
        <div >
           
            <Container>
          
          {
            post.map(data=>(
             // console.log(data);
              <Posts data={data} key={data._id} />
            ))
          }
          
          
          
         
             </Container>
         </div>
       
    )
}

export default Mypost;