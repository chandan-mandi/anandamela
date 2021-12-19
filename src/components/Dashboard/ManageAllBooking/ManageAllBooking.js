import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllOrders } from '../../../redux/slices/ProductSlice';

const ManageAllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllOrders())
        setLoading(false)
    }, [dispatch])
    const orders = useSelector((state) => state.products.allOrders)
    // ORDER DETELE HANDLER
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to Cancel the Booking?')
        if (proceed) {
            const url = `https://safe-crag-22535.herokuapp.com/deletedBooking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Booking Cancel')
                        const remaining = booking.filter(booking => booking?._id !== id)
                        setBooking(remaining);
                    }
                })
        }
    }
    // HANDLE STATUS CHANGE
    const handleStatusChange = (id, status) => {
        let modifiedBooking = [];
        booking.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedBooking.push(order)
        })
        setBooking(modifiedBooking)

        const modifiedStatus = { id, status }

        axios.patch(`https://eventmakerserver.herokuapp.com/orders/${id}`, modifiedStatus)
            .then(res => res.data && toast.success(`Set to ${status}`))
            .catch(error => alert(error.message))
    }
    return (
        <div className="px-3 manage-booking">
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <h2>Total Booking {booking.length}</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Address</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="success"/> :
                orders.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.phone}</td>
                            <td>{order.fullAddress}</td>
                            <td>
                                <select
                                    className={order?.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                    defaultValue={order.status}
                                    onChange={e => handleStatusChange(order._id, e.target.value)}>
                                    <option className="bg-white text-muted">Pending</option>
                                    <option className="bg-white text-muted">On going</option>
                                    <option className="bg-white text-muted">Done</option>
                                </select>
                                <Toaster />
                            </td>
                            <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1">CANCEL</Button>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
        
    );
};

export default ManageAllBooking;