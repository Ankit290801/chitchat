import React from 'react'
import "../components/fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Alert ,Container,Navbar,NavbarBrand,NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
             <Navbar color="primary" style={{background:"#fff"}}light>
            <NavbarBrand>chitchat </NavbarBrand>
            </Navbar>
            <Navbar color="primary" className="shadow-md" style={{background:"#fff"}}light>
            <div className="col d-flex justify-content-between">
                <Link to="dashboard"><div><FontAwesomeIcon  className="icon" icon="home" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Link>
                <Link to="public"><div><FontAwesomeIcon  className="icon" icon="bookmark" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Link>
                <Link to="/notification"><div><FontAwesomeIcon  className="icon" icon="bell" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Link>
                <Link to="/user"><div><FontAwesomeIcon  className="icon" icon="user" style={{height:'40px',width:'40px',color:'red'}} /></div>
                </Link>
                      </div>
            </Navbar>
        </div>
    )
}
