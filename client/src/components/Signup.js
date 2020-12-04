import {React} from 'react'
import {Card,Form, FormGroup, Alert,Container,Navbar,NavbarBrand} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, useHistory,Link } from 'react-router-dom'
import {Button} from 'reactstrap'




export default function Signup() {
    const history=useHistory();
     
    const sendData=()=> {
       
    history.push('/dashboard');   
    } 


    return (
        <div className="container" >
            <Button onClick={sendData}>push</Button>
            <Container className="d-flex align-items-center justify-content-center bg-white" style={{minHeight: "100vh",zIndex:'100'}}>
                <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
                    <Card className="signupCard shadow-lg">
                        <Card.Body>
                            <h2 className="text-center mb-4">Create an Account</h2>
                            <hr style={{height:'5px'}} />
                            <Alert variant = "danger"></Alert>
                            <Form >
                                <FormGroup id="name">
                                    <Form.Label>Name</Form.Label>
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
                                <Button className="w-100" type="submit" color="primary" onclick={sendData}>Submit</Button>
                            </Form>
                <div className="w-100">Already have an Account? <Link to="/login">Login</Link></div>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </div>
    )
}
