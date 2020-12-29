import React from 'react'
import "./fontawesome/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar,Nav,Button } from 'react-bootstrap'
import { NavLink ,useHistory, Route} from 'react-router-dom'
import Notify from './Notify'
import { useState } from 'react'



export default function Header() {
    const [show, setShow] = useState(false)
    const history=useHistory();
    console.log(show)
   
   const logout=()=>{
    history.push("/");
    window.location.reload(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
   }
   
    return (
        
        <div >
            <Navbar fixed="top" className="container-fluid justify-content-between" bg="dark" style={{color:'#fff',fontWeight:'lighter',textTransform:'uppercase'}}>
        <>
        <div>
            <Navbar.Brand as={NavLink} to="/" style={{color:'#fff'}}>chitchat </Navbar.Brand>
        </div>

        <div id="header3">
        <Nav className="container-fluid align-items-center">
            {/* "NavLink" here since "active" class styling is needed */}
           
                <div className="header-icon mx-5" >
                <Nav.Link as={NavLink} to="/home">
                   <FontAwesomeIcon  className="icon" icon="home" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                <div id="underline" style={{background:'#fff',height:'5px',width:'0px',transition:'0.8s'}}>

                </div>
                </div>
                <div className="header-icon mx-5">
                <Nav.Link as={NavLink} to="/public">
                   <FontAwesomeIcon  className="icon" icon="bookmark" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                </div>
                
                <div className="header-icon mx-5">
                <Nav.Link>
                   <FontAwesomeIcon  className="icon" icon="bell" style={{height:'30px',width:'30px',color:'#fff'}} 
                       onClick={() => setShow(!show)}            
                   />
                </Nav.Link>
                </div>

                <div className="header-icon mx-5">
                <Nav.Link as={NavLink} to="/update-profile">
                   <FontAwesomeIcon  className="icon" icon="user" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                </div>
                


           
          </Nav>

        </div>

           <div className="d-flex align-self-center">
                <div className="mx-lg-3 mx-2 mt-2 align-self-center">
                    <FontAwesomeIcon icon="search" style={{height:'30px',width:'30px',color:'#fff'}}/>
                </div>
                
                <div className="mx-lg-3 mx-2 mt-2 align-self-center">
                    <FontAwesomeIcon icon="comment-alt" style={{height:'30px',width:'30px',color:'#fff'}}/>
                </div>
                
                <Button onClick={()=>logout()} className="mx-lg-3 mx-2 mt-1">
                    <div>

                        Logout <FontAwesomeIcon icon="sign-out-alt"/>
                    </div></Button>
           </div>
        </>
            </Navbar>

            <Navbar style={{position:''}} id="header" bg="dark" fixed="bottom">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="container">
            {/* "NavLink" here since "active" class styling is needed */}
           
                <div className="header-icon" id="header">
                <Nav.Link as={NavLink} to="/home">
                   <FontAwesomeIcon  className="icon" icon="home" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                <div id="underline" style={{background:'#fff',height:'5px',width:'0px',transition:'0.8s'}}>

                </div>
                </div>
                <div className="header-icon">
                <Nav.Link as={NavLink} to="/public">
                   <FontAwesomeIcon  className="icon" icon="bookmark" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                </div>
                
                <div className="header-icon">
                <Nav.Link>
                   <FontAwesomeIcon  className="icon" icon="bell" style={{height:'30px',width:'30px',color:'#fff'}} 
                       onClick={() => setShow(!show)}            
                   />
                </Nav.Link>
                </div>

                <div className="header-icon">
                <Nav.Link as={NavLink} to="/update-profile">
                   <FontAwesomeIcon  className="icon" icon="user" style={{height:'30px',width:'30px',color:'#fff'}} />
                </Nav.Link>
                </div>
                


           
          </Nav>
        </Navbar>
            {show ? <Notify /> : null}
        </div>
    )
}
