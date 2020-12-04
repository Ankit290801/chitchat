import React from 'react'
import {  Button, Card, Alert ,Container,Navbar,NavbarBrand,NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header';
import logo from '../img/logo.jpeg'


export default function Dashboard() {
    return (
        <div className="" style={{background:'#ccc',minHeight:"100vh"}}>
             <Header />
            <container className="container " style={{}}>
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

            </container>
        </div>
    )
}
