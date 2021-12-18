import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, addToOrderList } from '../../../redux/slices/ProductSlice';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const orderAdd = (id) => {
        
        dispatch( addToOrderList(id));
        navigate(`/order/${id}`)
    }
    return (
        <>
            <Col lg={3} md={4} sm={6} className='py-2'>
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
                            <>
                            <Button onClick={() => orderAdd(product._id)} variant="success" className='mb-2'>Proceed To Checkout</Button>
                            <Button onClick={() => dispatch( removeFromCart(product._id))} variant="danger">Cancel Order</Button>
                            </>
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