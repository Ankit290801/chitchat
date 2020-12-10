import {React,useState , useEffect} from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import './fontawesome/index'
import Status from './Post'
import logo from '../img/logo.jpeg'

function Posts({data})
{
return (
  <div>
      <Card className="container" style={{ width: '100%' }}>
   
   <Card.Body>
<Card.Title>{data.postUser.name}</Card.Title> 
   <Card.Img variant="top" src={data.image}  style={{ width: '600px',height:'400px',margin:'auto' }}/>

     <Card.Text>
       {data.body}
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
  </div>
);
}
function Home() {
    
  const [post,setposts]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5001/posts",{
            method:"get",
            headers:{
                'Authorization':'Bearer '+ localStorage.getItem('jwt') 
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.post);
            setposts(data.post);
        })
  },[])
  
  return (
        <div>
           <Status />
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

export default Home;