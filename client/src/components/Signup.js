import React from 'react'
import {Card,Form, FormGroup, Alert,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

export default function Signup() {

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
                    <Alert variant = "danger"></Alert>
                    <Form >
                    <FormGroup id="name">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" required></Form.Control>
                        </FormGroup>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required></Form.Control>
                        </FormGroup>
                        <Button className="w-100" type="submit" color="primary">Submit</Button>
                    </Form>
                    <div className="w-100">Already have an Account? <Link to="/login">Login</Link></div>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </div>
    )
}
