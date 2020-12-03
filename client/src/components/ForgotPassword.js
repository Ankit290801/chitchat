import React from 'react'
import {Card,Form, FormGroup, Alert , Container,Navbar,NavbarBrand} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
    return (
        <div>
            <Navbar color="primary" style={{background:"red"}}light>
            <NavbarBrand>chitchat</NavbarBrand>
            </Navbar>
             <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
             <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <Alert variant = "danger"></Alert>
                    <Alert variant = "success"></Alert>
                    <Form>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </FormGroup>
                        
                        <Button className="w-100" type="submit" color="primary">Reset Password</Button>
                        <div className="w-100 text-center mt-3"><Link to="/login">Login</Link></div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100">Don't have an Account? <Link to="/signup">Sign up</Link> </div>
            </div>
            </Container>
        </div>
    )
}
