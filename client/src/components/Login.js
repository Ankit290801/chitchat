import { React , useState } from 'react'
import {Card,Form, FormGroup, Container,Navbar,NavbarBrand} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

 function Login() {
    
    const [email,useemail]=useState("")
    const [password,usepassword]=useState("")

    const RegisterData=(e)=>{
        e.preventDefault();
        console.log( password + email);
        // fetch("http://localhost:5001/signup",{
        // method:"post",
        // headers:{
        //     "content-type":"application/json"
        // },
        // body:JSON.stringify({
        //     name:name,
        //     password:password,
        //     email:email,
        //     cpassword:cpassword
        // })
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setmessage(data.success);
        //     //history.push("/login");
        // })
        // .catch(err=>{
        //     console.log(err);
        //     setmessage("check your network");
        // })
    }


    return (
        <div>
            <Navbar color="primary" style={{background:"red"}}light>
            <NavbarBrand>chitchat</NavbarBrand>
            </Navbar>
             <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
             <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form onSubmit={RegisterData}>
                    <FormGroup id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e)=>useemail(e.target.value)} ></Form.Control>
                                </FormGroup>

                                <FormGroup id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e)=>usepassword(e.target.value)} ></Form.Control>
                                </FormGroup>

                        
                        <Button className="w-100" type="submit" color="primary">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2"><Link to="/forgot-password">Forgot password? </Link> </div>
                </Card.Body>
            </Card>
            <div className="w-100">Don't have an Account? <Link to="/">Sign up</Link> </div>
            </div>
            </Container>
        </div>
    )
}

export default Login;