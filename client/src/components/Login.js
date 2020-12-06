import { React , useHistory } from 'react'
import {Card,Form, FormGroup, Container,Navbar,NavbarBrand} from 'react-bootstrap'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function Login() {
    
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
                    <Form>
                        <FormGroup id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </FormGroup>

                        <FormGroup id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required></Form.Control>
                        </FormGroup>

                        
                        <Button className="w-100" type="submit" color="primary">Log In</Button>
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
