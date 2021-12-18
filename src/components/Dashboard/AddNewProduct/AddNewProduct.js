import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { postNewProduct } from '../../../redux/slices/ProductSlice';

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(postNewProduct(data))
        reset();
    }
    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} sm={12}>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", { required: true })}
                                        placeholder="Product Name"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("img", { required: true })}
                                        placeholder="Product Image Link"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("price", { required: true })}
                                        placeholder="Enter Product Price"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("category", { required: true })}
                                        placeholder="Enter some tags"
                                    />
                                </Col>
                            </Row>
                            <label>Service Details</label>
                            <textarea
                                type="textarea"
                                style={{ height: '150px' }}
                                className="our-form-input"
                                defaultValue=""
                                {...register("about", { required: true })}
                                placeholder="Enter Product Details"
                            />
                            <br />
                            {/* <Button type="submit">Send</Button> */}
                        </Col>
                    </Row>
                </div>

                <div className="text-center mt-4">
                    <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                        Add Product
                    </Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default AddNewProduct;