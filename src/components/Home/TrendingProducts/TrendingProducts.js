import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/ProductSlice';
import ProductCard from '../../shared/ProductCard/ProductCard';

const TrendingProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const addToShopCart = (product) => {
        dispatch(addToCart(product));

    }
    return (
        <div className='trending-products' style={{ backgroundColor: '#E5E5E5' }}>
            <Container className="py-5">
                <div className="section-title">
                    <h2>Trending Products</h2>
                </div>
                <Row>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                            addToShopCart={addToShopCart}
                        ></ProductCard>)
                    }
                </Row>
                <Row className='py-2'>
                    <Col md={9} sm={12}>
                        <Row>
                            <Col md={6} sm={12} className='discount-firstcard'>
                                <Card>
                                    <div className="discount-title">
                                        <Card.Body>
                                            <h2>23% off in all products</h2>
                                            <Link to="/products"><p>Shop Now</p></Link>
                                        </Card.Body>
                                        <div className="discounted-img">
                                            <Card.Img variant="top" src="https://i.ibb.co/59GHHP7/image-1162.png" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6} sm={12} className='discount-secondcard'>
                                <Card>
                                    <div className="discount-title">
                                        <Card.Body>
                                            <h2>23% off in all products</h2>
                                            <Link to="/products"><p>View Collection</p></Link>
                                        </Card.Body>
                                        <div className="discounted-img">
                                            <Card.Img variant="top" src="https://i.ibb.co/XzpbLD9/image-1161.png" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} sm={12}>
                        <Row className="executive-part py-2">
                            <Col md={3} sm={3} xs={3}>
                                <div className="executive-img">
                                    <img src="https://i.ibb.co/Qd03w2B/image-30.png" alt="" />
                                </div>
                            </Col>
                            <Col md={9} sm={9} xs={9}>
                            <h6>Executive Seat chair</h6>
                            <h6>Price: $26.00</h6>
                            </Col>
                        </Row>
                        <Row className="executive-part py-2">
                            <Col md={3} sm={3} xs={3}>
                                <div className="executive-img">
                                    <img src="https://i.ibb.co/ctNnYZW/image-19.png" alt="" />
                                </div>
                            </Col>
                            <Col md={9} sm={9} xs={9}>
                            <h6>Executive Seat chair</h6>
                            <h6>Price: $26.00</h6>
                            </Col>
                        </Row>
                        <Row className="executive-part py-2">
                            <Col md={3} sm={3} xs={3}>
                                <div className="executive-img">
                                    <img src="https://i.ibb.co/GpVSNTs/image-28.png" alt="" />
                                </div>
                            </Col>
                            <Col md={9} sm={9} xs={9}>
                            <h6>Executive Seat chair</h6>
                            <h6>Price: $26.00</h6>
                            </Col>
                        </Row>
                        <Row className="executive-part py-2">
                            <Col md={3} sm={3} xs={3}>
                                <div className="executive-img">
                                    <img src="https://i.ibb.co/ctNnYZW/image-19.png" alt="" />
                                </div>
                            </Col>
                            <Col md={9} sm={9} xs={9}>
                            <h6>Executive Seat chair</h6>
                            <h6>Price: $26.00</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TrendingProducts;