import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
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
            history.push("/")
        }
        catch{
            setError('Failed to create an account')
        }

        setLoading(false)        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Create an Account</h2>
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
    )
}
