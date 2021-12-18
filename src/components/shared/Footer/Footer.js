import { faClock, faLocationArrow, faPhoneAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Form, FormControl, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section ">
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="section-title" >
                            <h2 className="">Anandamela</h2>
                        </div>
                        <Form className="d-flex">
                            <FormControl
                                type="email"
                                placeholder="Enter Email Address"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">SignUp</Button>
                        </Form>
                        <p style={{margin: '15px 0 0'}}>Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </Col>
                    <Col md={8} sm={12}>
                        <Row>
                            <Col md={4} sm={6}>
                                <h6 className="pb-2">Catagories</h6>
                                <li><Link to="/">Laptop & Computers</Link></li>
                                <li><Link to="/">Cameras & Photography</Link></li>
                                <li><Link to="/">Smart Phones & Tablets</Link></li>
                                <li><Link to="/">Video Games & Consoles</Link></li>
                                <li><Link to="/">Waterproff Headphones</Link></li>
                            </Col>
                            <Col md={4} sm={6}>
                                <h6 className="pb-2">Customer Care</h6>
                                <li><Link to="/">My Account</Link></li>
                                <li><Link to="/">Discount</Link></li>
                                <li><Link to="/">Returns</Link></li>
                                <li><Link to="/">Orders History</Link></li>
                                <li><Link to="/">Order Tracking</Link></li>
                            </Col>
                            <Col md={4} sm={6}>
                                <h6 className="pb-2">Pages</h6>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">Browse the Shop</Link></li>
                                <li><Link to="/contact">Category</Link></li>
                                <li><Link to="/news">News</Link></li>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;