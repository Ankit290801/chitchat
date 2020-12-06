import React from 'react'
import {Card,Form, FormGroup, Alert , Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

export default function UpdateProfile() {
    
    return (
        <div>
             <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
             <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    <Alert variant = "danger"></Alert>
                    <Form>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                            ></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password"  
                            placeholder="Leave blank to keep the same"></Form.Control>
                        </FormGroup>

                        <FormGroup id="password-confirm">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password"  
                            placeholder="Leave blank to keep the same"></Form.Control>
                        </FormGroup>
                        <Button className="w-100" type="submit" color="primary">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center"><Link to="/">Cancel</Link></div>
            </div>
            </Container>
        </div>
    )
}
