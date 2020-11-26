import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert ,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {currentUser , login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log(currentUser.uid + currentUser.email);
            /*axios.post("http://localhost:5000/login",currentUser.uid)
            .then((response)=>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })*/
            fetch("/login",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    email:currentUser.email,
                    password:passwordRef.current.value
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

            history.push('/')
        }

        catch{
            setError('Failed to sign in')
        }

        setLoading(false)        
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
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </FormGroup>

                        
                        <Button disabled={loading} className="w-100" type="submit" color="primary">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2"><Link to="/forgot-password">Forgot password? </Link> </div>
                </Card.Body>
            </Card>
            <div className="w-100">Don't have an Account? <Link to="/signup">Sign up</Link> </div>
            </div>
            </Container>
        </div>
    )
}
