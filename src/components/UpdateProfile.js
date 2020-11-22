import React, {useRef, useState} from 'react'
import {Card,Form, FormGroup, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {Button} from 'reactstrap'
import {useAuth} from '../contexts/AuthContext'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updateEmail, updatePassword} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password do not match")
        }

        const promises = []
        setError("")
        setLoading(true)
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError("Failed to update profile")
        }).finally(() => {
            setLoading(false)
        })      
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} 
                            defaultValue={currentUser.email}></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} 
                            placeholder="Leave blank to keep the same"></Form.Control>
                        </FormGroup>

                        <FormGroup id="password-confirm">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} 
                            placeholder="Leave blank to keep the same"></Form.Control>
                        </FormGroup>
                        <Button disabled={loading} className="w-100" type="submit" color="primary">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center"><Link to="/">Cancel</Link></div>
        </div>
    )
}
