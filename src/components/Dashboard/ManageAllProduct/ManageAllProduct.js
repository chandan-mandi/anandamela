import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { deleteProduct, fetchProducts, removeFromProduct } from '../../../redux/slices/ProductSlice';
import useAuth from '../../hooks/useAuth';

const ManageAllProduct = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const history = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        setLoading(false)
    }, [dispatch]);
    const products = useSelector((state) => state.products.products)
   

    // HANDLE RESTRICTPERMISSION 
    const restrictPermission = (id) => {
        let matchedID = false;
        for (let i = 0; i <= 6; i++) {
            const { _id } = products[i];
            if (id === _id) {
                matchedID = true;
            }
        }
        if (user.email === "admin@admin.com" && matchedID) {
            return true;
        }
        return false;
    }

    // PRODUCT DETELE HANDLER
    const handleDelete = (id) => {
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        const proceed = swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        })
            if (proceed) {
                dispatch(deleteProduct(id))
            }
            dispatch(removeFromProduct(id))
            
       
    }
    // CAR UPDATE HANDLER
    const handleUpdate = (id) => {
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        const uri = `update/${id}`;
        history(uri)
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Manage All Car</h2>
                <h2>Total Cars {products.length}</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td>Service Photo</td>
                        <td>Service Name</td>
                        <td>Price</td>
                        <td>UPDATE</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="success" /> :
                    products.map((service, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{ width: '180px' }}><img src={service?.img} style={{ width: '130px', height: '100px', borderRadius: '5px' }} alt="" /> </td>
                                <td>{service.name.toUpperCase()}</td>
                                <td>{service.price}</td>
                                <td><Button onClick={() => handleUpdate(service._id)} variant="warning bg-warning m-1">Update</Button></td>
                                <td><Button onClick={() => handleDelete(service._id)} variant="danger bg-danger text-light m-1">Delete</Button></td>
                            </tr>
                        </tbody>
                    ))}
            </table>
            <Toaster />
        </div>
    );
};

export default ManageAllProduct;