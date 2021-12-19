import { faApple, faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faCartArrowDown, faCartPlus, faComment, faDollarSign, faEye, faHandsHelping, faHome, faMoneyBill, faPassport, faPeopleArrows, faPlus, faSearch, faShoppingBag, faSignOutAlt, faSms, faToggleOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ProfilePopper from '../../ProfilePopper/ProfilePopper';
import "./DashboardPage.css";

const DashboardPage = () => {
    const {admin} = useAuth();

    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <div className="main-dashboard">
            <div className="dash-container">
                <div className={isActive ? "navigation active" : "navigation"}>
                    <ul>
                        <li>
                            <Link to="/">
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faApple}></FontAwesomeIcon>
                                </span>
                                <span className="title"><strong>Anandamela</strong> </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faHome}></FontAwesomeIcon>
                                </span>
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                        {!admin && <> 
                        <li>
                            <Link to={`dashboard/myBookings`}>
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faShoppingBag}></FontAwesomeIcon>
                                </span>
                                <span className="title">My Bookings</span>
                            </Link>
                        </li>
                            <li>
                                <Link to={`dashboard/sendReview`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faSms}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Add a Review</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`dashboard/payment`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faMoneyBill}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Payment</span>
                                </Link>
                            </li>
                        </>}
                        {admin && <>
                            <li>
                                <Link to={`dashboard/addNewProduct`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faPlus}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Add New Product</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`dashboard/makeAdmin`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faUser}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`dashboard/manageAllOrder`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faCartPlus}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Manage All Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`dashboard/manageAllProduct`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faServicestack}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Manage All Product</span>
                                </Link>
                            </li>
                        </>}
                        <li>
                            <Link to="/">
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faSignOutAlt}></FontAwesomeIcon>
                                </span>
                                <span className="title">Back to Home</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* main part  */}
                <div className={isActive ? "main active" : "main"}>
                    <div className="topbar">
                        <div className="toggle" onClick={handleToggle}>
                            <FontAwesomeIcon icon={faToggleOff}></FontAwesomeIcon>
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                <FontAwesomeIcon className="faIcon" icon={faSearch}></FontAwesomeIcon>
                            </label>
                        </div>
                        <div className="user">
                            {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /> */}
                            <ProfilePopper/>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="cardBox">
                        {admin && <>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">1,504</div>
                                <div className="cardName">Daily Views</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Sales</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">284</div>
                                <div className="cardName">Comments</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div>
                                <div className="numbers">$7,842</div>
                                <div className="cardName">Earning</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                            </div>
                        </div>
                        </>}
                    </div>
                    {/* DETAILS  */}
                    <div className="details">
                        {/*order details list  */}
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <Outlet/>
                            </div>
                        </div>
                        {/* NEW CUSTOMER  */}
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Recent Customers</h2>
                            </div>
                            <table>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                                <tr>
                                    <td width="60px"><div className="imgBx"><img src="https://i.ibb.co/QHpYyt9/img1.jpg" alt="" /></div> </td>
                                    <td><h4>David <br /> <span>Ita</span></h4></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;