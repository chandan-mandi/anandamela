import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../../redux/slices/ProductSlice';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location)
    return (
        <>
            <Col lg={3} md={3} sm={6}>
                <Card style={{ textAlign: "center" }}>
                    <div className="card-image">
                        <Card.Img variant="top" src={product.img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Code - Y523201
                        </Card.Text>
                        <Card.Text>
                            ${product.price}.00
                        </Card.Text>
                        {
                            location.pathname === "/cart" ?
                            <Button onClick={() => dispatch( removeFromCart(product.id))} variant="danger">Cancel Order</Button>
                            :
                            <Button onClick={() => dispatch( addToCart(product))} variant="warning">Add to Cart</Button>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ProductCard;