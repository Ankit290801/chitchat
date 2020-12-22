import React from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Notify from './Notify'
import { useState } from 'react'

export default function Header() {
    const [show, setShow] = useState(false)
    console.log(show)
    return (
        <div>
            <Navbar sticky='top' color="primary" style={{background:"#333",color:'#fff',fontWeight:'lighter',textTransform:'uppercase'}}light>
                <Navbar.Brand as={NavLink} to="/" style={{color:'#fff'}}>chitchat </Navbar.Brand>
            </Navbar>

            <Navbar style={{background:"#333"}} sticky='top' light>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="container">
            {/* "NavLink" here since "active" class styling is needed */}
           
                <div className="header-icon">
                <Nav.Link as={NavLink} to="/home">
                   <FontAwesomeIcon  className="icon" icon="home" style={{height:'30px',width:'30px',color:'red'}} />
                </Nav.Link>
                </div>
                <div className="header-icon">
                <Nav.Link as={NavLink} to="/public">
                   <FontAwesomeIcon  className="icon" icon="bookmark" style={{height:'30px',width:'30px',color:'red'}} />
                </Nav.Link>
                </div>
                
                <div className="header-icon">
                <Nav.Link>
                   <FontAwesomeIcon  className="icon" icon="bell" style={{height:'30px',width:'30px',color:'red'}} 
                       onClick={() => setShow(!show)}
                   />
                </Nav.Link>
                </div>

                <div className="header-icon">
                <Nav.Link as={NavLink} to="/update-profile">
                   <FontAwesomeIcon  className="icon" icon="user" style={{height:'30px',width:'30px',color:'red'}} />
                </Nav.Link>
                </div>
               
                
           
          </Nav>
        </Navbar>
            {show ? <Notify /> : null}
        </div>
    )
}
