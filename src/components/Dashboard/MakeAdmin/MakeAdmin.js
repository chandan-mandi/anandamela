import React, {useState} from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { putAdmin } from '../../../redux/slices/ProductSlice';

const MakeAdmin = () => {
    // const [success, setSuccess] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => { 
        // console.log(data);
        dispatch(putAdmin(data));
        reset();
    }
    return (
        <div>
            <h2>Make An Admin Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={8} sm={12}>
                                    <label>Admin Email</label>
                                    <input
                                        className="our-form-input"
                                        type="email"
                                        defaultValue=""
                                        {...register("email", { required: true })}
                                        placeholder="Type Email Address"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <div className="text-center mt-4">
                                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                                        Submit
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </form>
            <Toaster/>
        </div>
    );
};

export default MakeAdmin;