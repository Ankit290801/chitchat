import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import './fontawesome/index'

import logo from '../img/logo.jpeg'
export default function Home() {
    return (
        <div>
            <Container>
            <Card className="container" style={{ width: '100%' }}>
   <Card.Img variant="top" src={logo}  style={{ width: '600px',height:'400px',margin:'auto' }}/>
   <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>

 <Card  className="container my-4" style={{ width: '100%' }}>
   <Card.Img variant="top" src={logo}  style={{ width: '600px',height:'400px',margin:'auto' }}/>
   <Card.Body>
    <Card.Title>Card Title</Card.Title>
     <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>

 <Card  className="container" style={{ width: '100%' }}>
   <Card.Img variant="top" src={logo}  style={{ width: '600px',height:'400px',margin:'auto' }}/>
   <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
       Some quick example text to build on the card title and make up the bulk of
       the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
             </Container>
         </div>
       
    )
}
