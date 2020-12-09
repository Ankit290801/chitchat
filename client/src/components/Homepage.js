import {React , useState} from 'react'
import Signup from './Signup'
import {FormGroup, Container, Navbar, NavbarBrand, NavItem, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink ,useHistory } from 'react-router-dom'
import logo from '../img/logo.jpeg'
import Status from './Post'
function Homepage() {
    
    
    const [email,useemail]=useState("")
    const [password,usepassword]=useState("")
   
    const history=useHistory();

        function RegisterData(e){
        e.preventDefault();
        console.log(password + email);

        fetch("http://localhost:5001/login",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
           email:email,
           password:password
           
        })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.err)
           {
            console.log("sorry");
           }
           else
           {
            localStorage.setItem('jwt',data.token);
            localStorage.setItem('user',JSON.stringify(data.user));
               
            history.push("/home");
           }
            
        })
        .catch(err=>{
            console.log(err);
            //setmessage("check your network");
        })
    }
   // console.log(Lemail);
    return (
        
        <div style={{background:'#fff'}}>
           
            <Navbar classname="container-fluid bg-white" bg="light" variant="light">
                <Container>
                   <Navbar.Brand><img src= {logo} alt="chitchat" height="50px"/></Navbar.Brand>
                    {/*  <Form inline  onSubmit={()=>RegisterData()}>
                    <FormControl type="text"  value={Lemail} onChange={(e)=>Luseemail(e.target.value)} placeholder="Email" className="mr-sm-2" />
                    <FormControl type="password" value={Lpassword} onChange={(e)=>Lusepassword(e.target.value)} placeholder="Password" className="mr-sm-2" />
                    <Button variant="outline-primary" >Login</Button>
                    </Form> */}
                     <Form onSubmit={RegisterData} inline className="d-flex">
                               <div className="mx-2">
                               <FormGroup id="email">
                                <Form.Label  className="mx-2">Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e)=>useemail(e.target.value)} ></Form.Control>
                                </FormGroup>
                               </div>
                               <div  className="mx-2">
                               <FormGroup id="password">
                                <Form.Label  className="mx-2">Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e)=>usepassword(e.target.value)} ></Form.Control>
                                </FormGroup>
                               </div>

                               <div className="mx-2">
                                <Button className="w-100" type="submit" variant="outline-primary" color="primary">Log In</Button>
                                </div>
                                
                    </Form>




                </Container>
            </Navbar>
            <div className="ld">
                <Signup />
            </div>
        </div>
    )
}

export default  Homepage;