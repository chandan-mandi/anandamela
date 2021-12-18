import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ProfilePopper from '../../ProfilePopper/ProfilePopper';
import "./Menubar.css";

const MenuBar = () => {
    const { user, Logout } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const {photoURL: img} = user;
    const products = useSelector((state) => state.products.cartList);
    

    const handleLogout = () => {
        Logout();
        toast.error('Logged Out')
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg"
        variant="light" 
        sticky="top"
        className={(isSticky || isCollapsed) ? "text-kalo shadow-sm bg-light py-2" : "py-2"}>
            <Container>
                <Navbar.Brand 
                as={Link}
                to="/"
                >
                    <img width="40"
                    height="40"
                    className="d-inline-block align-top mr-2" src="https://i.ibb.co/0J6X5hw/anandamela-logo.png" alt="" />
                    <strong>Anandamela</strong>
                    </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/shop">Shop</Nav.Link> */}
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        <Nav.Link as={Link} to="/cart" className='cart-icon'> <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon> <Badge className='cart-badge'>{products.length || 0}</Badge></Nav.Link>
                        {!user?.email ?
                            <Link to="/login" className="btn-book">Login</Link>
                            :
                            <div>
                            <div className="user-img">
                                <ProfilePopper/>
                            </div>
                            <Toaster/>
                            </div>
                            
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;