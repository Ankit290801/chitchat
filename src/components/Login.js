import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }
        catch{
            setError('Failed to sign in')
        }

        setLoading(false)        
    }
    return (
        <div>
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
    )
}
