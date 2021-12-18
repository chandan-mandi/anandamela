import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToOrderList, postOrder, removeFromCart } from '../../../redux/slices/ProductSlice';
import useAuth from '../../hooks/useAuth';
import MenuBar from '../../shared/Menubar/Menubar';
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {user} = useAuth();
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();


    const onSubmit = data => {
        data.productId = id;
        dispatch(postOrder(data))
        dispatch(removeFromCart(id));
        reset();
        navigate('/cart')
    }
    return (
        <div className="car-booking">
            <MenuBar />
            <Container className="py-5">
                <h2 className="text-center py-2">Booking Confirmation</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" type="text" {...register("CarName", { required: true })} defaultValue="name" />
                                <label>Name</label>
                                <input
                                    className="our-form-input"
                                    type="text"
                                    defaultValue="Andi"
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="our-form-input"
                                    defaultValue={user.email}
                                    {...register("email", { required: true })}
                                    
                                    placeholder="Your Email"
                                    
                                />
                                <label>Your Phone Number</label>
                                <input
                                    type="number"
                                    className="our-form-input"
                                    defaultValue="7974981274"
                                    {...register("phone", { required: true })}
                                    placeholder="Phone Number"
                                />
                                <label>Test Drive Date</label>
                                <input
                                    type="date"
                                    date="{{date}}" timezone="[[timezone]]"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("testDriveDate")}
                                    placeholder="Test Drive Date"
                                />
                                <textarea
                                    type="textarea"
                                    className="our-form-input"
                                    defaultValue="jamalpur"
                                    {...register("address", { required: true })}
                                    placeholder="Address"
                                />
                                 <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                        </Row>
                    </div>

                    <div className="text-center mt-4">
                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                            Confirm Booking
                        </Button>
                    </div>
                </form>
                <Toaster/>

            </Container>
        </div>
    );
};

export default ConfirmOrder;