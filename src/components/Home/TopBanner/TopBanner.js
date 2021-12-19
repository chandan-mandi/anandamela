import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import "./TopBanner.css";

const TopBanner = () => {
    return (
        <div className="top-banner py-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Fade left duration={2000} distance="40px">
                            <div className="party-text">
                                <h6>Best Furniture For Your Castle...</h6>
                                <h2>New Furniture Collection <br /> Trends in 2021</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae fuga eveniet adipisci iusto ut dolores aspernatur aliquid animi earum?</p>
                                <div className="btn-book"> <Link to="/products">Shop Now</Link></div>
                            </div>
                        </Fade>
                    </Col>
                    <Col lg={6} md={4} sm={12}>
                        <Fade right duration={2000} distance="40px">
                            <div className="party-img">
                                <img src="https://i.ibb.co/WF85vd3/sofa-promotional-header.png" alt="" />
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;