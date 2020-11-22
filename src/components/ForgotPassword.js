import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        }
        catch{
            setError('Failed to reset password')
        }

        setLoading(false)        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    {message && <Alert variant = "success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </FormGroup>
                        
                        <Button disabled={loading} className="w-100" type="submit" color="primary">Reset Password</Button>
                        <div className="w-100 text-center mt-3"><Link to="/login">Login</Link></div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100">Don't have an Account? <Link to="/signup">Sign up</Link> </div>
        </div>
    )
}
