import React, {useState} from 'react'
import {Card,Form, FormGroup, Alert,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, useHistory,Link } from 'react-router-dom'
import {Button, Input} from 'reactstrap'




function Signup() {
    const [name,usename]=useState("")
    const [email,useemail]=useState("")
    const [password,usepassword]=useState("")
    const [cpassword,useconfirmpassword]=useState("")
    const [message,setmessage]=useState("")
    const history=useHistory();
    const [show, setShow] = useState(false)
    
    const RegisterData=(e)=>{
        e.preventDefault();
        console.log(name + password + email);
        fetch("http://localhost:5001/signup",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            password:password,
            email:email,
            cpassword:cpassword
        })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setmessage(data.success);
            //history.push("/login");
        })
        .catch(err=>{
            console.log(err);
            setmessage("check your network");
        })
    }

    return (
        <div className="container" >
            {/* <Button onClick={sendData}>push</Button> */}
            <Container className="d-flex align-items-center justify-content-center bg-white" style={{minHeight: "100vh",zIndex:'100'}}>
                <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
                    <Card className="signupCard shadow-lg">
                        <Card.Body>
                            <h2 className="text-center mb-4">Create an Account</h2>
                            <hr style={{height:'5px'}} />
                            <Alert variant = "danger">{message}</Alert>
                            <Form onSubmit={RegisterData}>
                                <FormGroup id="name" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e)=>usename(e.target.value)} ></Form.Control>
                                </FormGroup>
                                <FormGroup id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e)=>useemail(e.target.value)} ></Form.Control>
                                </FormGroup>

                                <FormGroup id="password">
                                    <Form.Label>Password</Form.Label>
                                    {show ? 
                                        <Form.Control type="text" value={password} onChange={(e)=>usepassword(e.target.value)} ></Form.Control>
                                        : <Form.Control type="password" value={password} onChange={(e)=>usepassword(e.target.value)} ></Form.Control>}
                                </FormGroup>

                                <FormGroup className="ml-4">
                                    <Input type = "checkbox" onClick={() => {setShow(!show)}}/>Show Password
                                </FormGroup>

                                <FormGroup id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" value={cpassword} onChange={(e)=>useconfirmpassword(e.target.value)}></Form.Control>
                                </FormGroup>
                                <Button className="w-100" type="submit" color="primary" >Submit</Button>
                            </Form>
                <div className="w-100">Already have an Account? <Link to="/login">Login</Link></div>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </div>
    )
}

        export default Signup;