import React from 'react'
import Signup from './Signup'
import { Container, Navbar, NavbarBrand, NavItem, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.jpeg'
export default function Homepage() {
    return (
        <div style={{background:'#fff'}}>
            <Navbar classname="container-fluid bg-white" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><img src= {logo} alt="chitchat" height="50px"/></Navbar.Brand>
                    <Form inline>
                    <FormControl type="text" placeholder="Email" className="mr-sm-2" />
                    <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                    <Button variant="outline-primary">Login</Button>
                    </Form>
                </Container>
            </Navbar>
            <div className="ld">
                <Signup />
            </div>
        </div>
    )
}
