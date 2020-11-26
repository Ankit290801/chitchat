import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser , signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
          
            fetch("/signup",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    name:nameRef.current.value,
                    email:emailRef.current.value,
                    password:passwordRef.current.value
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

            history.push("/")
        }
        catch(err){
            setError('Failed to create an account' )
            console.log(err);
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
                    <h2 className="text-center mb-4">Create an Account</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                    <FormGroup id="name">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" ref={nameRef} required></Form.Control>
                        </FormGroup>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </FormGroup>
                        <Button disabled={loading} className="w-100" type="submit" color="primary">Submit</Button>
                    </Form>
                    <div className="w-100">Already have an Account? <Link to="/login">Login</Link></div>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </div>
    )
}
