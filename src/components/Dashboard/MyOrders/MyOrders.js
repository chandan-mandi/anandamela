import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOrder, fetchOrder, removeFromOrder } from '../../../redux/slices/ProductSlice';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    // const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrder(user.email))
        setLoading(false)
    }, [dispatch, user.email])
    const myBookings = useSelector((state) => state.products.myOrder)

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to Cancel the Booking?')
        if (proceed) {
            dispatch(deleteOrder(id))
        }
        dispatch(removeFromOrder(id))
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Address</td>
                        <td>Type</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="danger" /> :
                    myBookings.map(order => (
                        <tbody>
                            <tr>
                                <td>{order?.name}</td>
                                <td>{order?.phone}</td>
                                 {/* <td><span className={order.status === "pending" ? "status pending" : order.status === "Pending" ? "status pending" : order.status === "On going" ? "status inprogress" : order.status === "Done" ? "status delivered" : null}>{order.status}</span></td> */}
                                <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1">Order Cancel</Button>
                            </tr>

                        </tbody>
                    ))}
            </table>

        </div>
    );
};

export default MyOrders;