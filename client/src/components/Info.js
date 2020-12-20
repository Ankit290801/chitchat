import React from 'react'
import { Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Navbar, NavbarBrand, Row } from 'react-bootstrap'

export default function Info() {
    return (
        <>
            <Navbar className="bg-dark">
                <NavbarBrand>Chitchat</NavbarBrand>
            </Navbar>
            <div className="container">
                <h3 className="text-center">Additional Info</h3><hr/>
                <div className="text-center">
                    <Form className="info-form">
                        <FormGroup as={Row}>
                            <FormLabel for="fname" col md={2} />Name
                            <Col md={10}>
                                <FormControl type="text" placeholder="Name" readOnly col />
                            </Col>
                        </FormGroup>                        
                        <FormGroup as={Row}>
                            <FormLabel for="phn" col sm={2} />Number
                            <Col sm={10}>
                                <FormControl type="number" placeholder="Phone Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel for="gender"/>Gender
                            
                                <>
                                    <FormCheck type="radio" label={`Male`} />
                                </>
                                <><FormCheck type="radio" label={`Female`} /></>
                                <><FormCheck type="radio" label={`Other`} /></>
                            
                        </FormGroup>
                        <FormGroup as={Row}>
                            <Col>
                                <FormGroup>
                                    <FormLabel for="country" />Country
                                    <FormControl type="text" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel for="city" />City
                                    <FormControl type="text" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel for="pin" />Pincode
                                    <FormControl type="text" />
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row}>
                            <FormLabel for="bio" />bio
                            <Col>
                                <FormControl type="textarea" />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>        
            </div>
        </>
    )
}
