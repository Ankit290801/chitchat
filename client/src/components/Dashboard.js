import React from 'react'
import { Button, Card, Alert ,Container,Navbar,NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Dashboard() {

{/*function sendData()
{
     fetch("/dashboard",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        changeName(data.name);
        //setdata(data); 
    })   
}  */}
    return (
       
        <>
         <div>
            {/* {sendData()}  */}
            <Navbar color="primary" style={{background:"red"}}light>
            <NavbarBrand>chitchat</NavbarBrand>
            </Navbar>
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
             <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <Alert variant = "danger"></Alert>
                    <strong>Email: </strong> <br></br><strong>Name</strong> 
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link">Log Out</Button>
            </div>
            </div>
            </Container>
        </div>
        </>
    )
}
