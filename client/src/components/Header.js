import React from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <Navbar color="primary" style={{background:"red"}}light>
                <Navbar.Brand as={NavLink} to="/">chitchat </Navbar.Brand>
            </Navbar>

            <Navbar style={{background:"#fff"}}light>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            {/* "NavLink" here since "active" class styling is needed */}
            <div className="col d-flex justify-content-around">
                <Nav.Link as={NavLink} to="/home">
                    <div><FontAwesomeIcon  className="icon" icon="home" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/public">
                    <div><FontAwesomeIcon  className="icon" icon="bookmark" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/notify">
                    <div><FontAwesomeIcon  className="icon" icon="bell" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/update-profile">
                    <div><FontAwesomeIcon  className="icon" icon="user" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Nav.Link>
            </div>
          </Nav>
        </Navbar>
        </div>
    )
}
