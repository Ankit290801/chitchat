import React from 'react'
import { Button, Card, Alert ,Container,Navbar,NavbarBrand,NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import PrivateRoute from '../components/PrivateRoute'
import Header from './Header';
import "../components/fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Public from './Pubic'
import User from './User'
export default function Dashboard() {

    return (
       
        <>
         <div style={{background:'#ccc'}}> 
        <Router>
       
        <Switch>
        <Route  exact path="/user" component={Public} />
        <Route Path="/public" component={User} />
        </Switch>
        </Router>
            {/* <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
             <div className="w-100 m-auto" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <Alert variant = "danger"></Alert>
                    <strong>Email: </strong> <br></br><strong>Name</strong> 
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link">Log Out</Button>
            </div>
            </div>
    </Container> */}
        </div>
        </>
    )
}
