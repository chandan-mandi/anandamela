import React from 'react';
import { Card, Col, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Fade } from 'react-reveal';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, addToOrderList } from '../../../redux/slices/ProductSlice';
import "./ProductCard.css";

const ProductCard = (props) => {
    const {product} = props;
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const {cartList} = useSelector((state) => state.products);

    const orderAdd = (id) => {
        dispatch(addToOrderList(id));
        navigate(`/order/${id}`)
    }
    

    return (
        <>

            <Col lg={3} md={4} sm={6} className='py-2'>
                <Fade bottom duration={2000} distance="40px">
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
                                        <Button onClick={() => dispatch(removeFromCart(product._id))} variant="danger">Cancel Order</Button>
                                    </>
                                    :
                                    <Button onClick={() => props.addToShopCart(product)} variant="warning">Add to Cart</Button>
                            }
                        </Card.Body>
                    </Card>
                    </Fade>
            </Col>

        </>
    );
};

export default ProductCard;