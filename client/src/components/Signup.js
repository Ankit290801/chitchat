import {React,useState,useEffect} from 'react'
import {Card,Form, FormGroup, Alert,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, useHistory,Link } from 'react-router-dom'
import {Button, Input} from 'reactstrap'
import '../App.css';
import logo from '../img/back.jpeg'
import './fontawesome/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Signup() {
    const [name,usename]=useState("")
    const [email,useemail]=useState("")
    const [password,usepassword]=useState("")
    const [cpassword,useconfirmpassword]=useState("")
    const [message,setmessage]=useState("")
    const history=useHistory();
    const [show,setShow] = useState(false)

        

    
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
            <Container className=" d-flex align-items-center justify-content-center bg-white" style={{minHeight: "100vh",zIndex:'100'}}>
             <div className=" signupCard h-auto d-flex align-items-center justify-content-center bg-white"  style={{width: "900px",height:'500px'}}>
             <div className="w-100 d-none d-md-block back" style={{maxWidth: "500px",height:'570px',float:'left'}}>
            
                <div className="overlay">
                   <div  style={{top:'50%',position:'absolute',left:'50%',transform:'translate(-50%,-50%)'}}>
                   <h1 style={{color:"#fff", textAlign:'center',paddingTop:'30px'}}>chitChat</h1>
                    
                    <button className=" button d-flex bg-transparent" style={{border:'3px solid #fff',margin:'auto',width:"300px",padding:'5px 5px 1px 1px'}}>
                    <FontAwesomeIcon  icon="home" style={{height:'20px',width:'40px',color:'#fff'}} />
                    <h2 style={{fontSize:'20px',color:'#fff',textAlign:'center'}}>sign up with google</h2>
                    </button>
                   </div>
                </div>
               </div>
               <div className="w-100" style={{maxWidth: "600px",float:'right',height:'100%',width:'400px'}}>
                    <Card  className="overlay shadow-lg bg-transparent">
                        <Card.Body >
                            <h2 className="text-center mb-4 text-white">Create an Account</h2>
                            <hr style={{height:'5px'}} className="formname text-white" />
                            <Alert variant = {message=='user success'?"success":"danger"} style={{display:message?'block':'none'}}>{message}</Alert>
                            <Form onSubmit={RegisterData}>
                                <FormGroup id="name" className="form" >
                                    <Form.Label className="formname text-white">Name</Form.Label>
                                    <Form.Control className="form" type="text" value={name} onChange={(e)=>usename(e.target.value)} ></Form.Control>
                                </FormGroup>
                                <FormGroup id="email">
                                    <Form.Label className="formname text-white">Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e)=>useemail(e.target.value)} ></Form.Control>
                                </FormGroup>

                                <FormGroup id="password">
                                    <Form.Label className="formname text-white">Password</Form.Label>
                                {show ? <Form.Control type="text" value={password} onChange={(e)=>usepassword(e.target.value)} /> : <Form.Control type="password" value={password} onChange={(e)=>usepassword(e.target.value)} />}
                                </FormGroup>

                                <FormGroup className="ml-4 text-white">
                                    <Input type = "checkbox" onClick={() => {setShow(!show)}}/>Show Password
                                </FormGroup>

                                <FormGroup id="password-confirm">
                                    <Form.Label className="formname text-white">Confirm Password</Form.Label>
                                    <Form.Control type="password" value={cpassword} onChange={(e)=>useconfirmpassword(e.target.value)}></Form.Control>
                                </FormGroup>
                                <Button className="w-100" type="submit" color="primary" >Submit</Button>
                            </Form>
                <div className="w-100 text-white">Already have an Account? <Link to="/login">Login</Link></div>
                <Link to="/info"><Button color="danger">Next</Button></Link>
                </Card.Body>
            </Card>
            </div>
             </div>

            </Container>
        </div>
    )
}

        export default Signup;