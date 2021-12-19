import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/ProductSlice';
import './UniqueProduct.css';

const UniqueProduct = () => {
    const dispatch = useDispatch();
    return (
        <div className='unique-product py-5'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} sm={12}>
                        <Fade left duration={2000} distance="40px">
                            <div className="unique-product-img">
                                <img src="https://i.ibb.co/5L8FVK0/Group-153.png" alt="" />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade right duration={2000} distance="40px">
                            <div className="section-title">
                                <h2>Unique Features of leatest & Trending Products</h2>
                            </div>
                            <div className="section-text">
                                <ul>
                                    <li>All frames constructed with hardwood solids and laminates</li>
                                    <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                                    <li>Arms, back and seats are structurally reinforced</li>
                                </ul>
                                <div className="btn-book" ><Link to="/products">Add to Cart</Link></div>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UniqueProduct;