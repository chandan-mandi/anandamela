import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuBar from '../components/shared/Menubar/Menubar';
import ProductCard from '../components/shared/ProductCard/ProductCard';
import { addToCheckoutList, postOrder } from '../redux/slices/ProductSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.cartList);

    const productsId = products.map(pd =>  pd._id)
    console.log(productsId);    
    let totalQuantity = 0;
    let total = 0;
    for (const product of products) {
        if (!product.quantity) {
            console.log(product.quantity)
            // product['quantity'] = "1";
        }
        total = total + parseInt(product.price);
        // totalQuantity = totalQuantity + product.index;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10.toFixed(2);
    const preGrandTotal = total + shipping + tax;
    const grandTotal = preGrandTotal.toFixed(2);
    


    const userOrder = (data) => {
        console.log(data)
        data.productId=productsId;
        console.log(data)
        dispatch(addToCheckoutList(data))
        navigate("/checkout")
    }
    return (
        <div>
            <MenuBar />
            <Container className="py-5">
                <div className="section-title">
                    <h2>Total Items: {products.length}</h2>
                </div>
                <Row>
                    <Col md={9}>
                        <Row>
                            {
                                products.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                ></ProductCard>)
                            }
                        </Row>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h3>Order Summary</h3>
                            <h5>Items Ordered: {products.length}</h5>
                            <br />
                            <p>Total: {total}</p>
                            <p>Shipping: {shipping}</p>
                            <p>tax: {tax}</p>
                            <p>Grand Total: {grandTotal}</p>
                            <Button onClick={() => userOrder({quantity:products.length,Price:grandTotal})} variant="success" className='mb-2'>Proceed To Checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;