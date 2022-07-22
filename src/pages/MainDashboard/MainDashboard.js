import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faAmbulance, faCarCrash, faCartArrowDown, faCartPlus, faChargingStation, faComment, faDollarSign, faEye, faHandsHelping, faHome, faPassport, faPeopleArrows, faSearch, faSignOutAlt, faToggleOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';
import ProfilePopper from '../../components/ProfilePopper/ProfilePopper';
import AddCarDetails from '../../components/UserDashboard/AddCarDetails/AddCarDetails';
import MakeAdmin from '../../components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from '../../components/UserDashboard/ManageAllBooking/ManageAllBooking';
import ManageAllCar from '../../components/UserDashboard/ManageAllCar/ManageAllCar';
import MyOrders from '../../components/UserDashboard/MyOrders/MyOrders';
import Payment from '../../components/UserDashboard/Payment/Payment';
import SendReview from '../../components/UserDashboard/SendReview/SendReview';
import Update from '../../components/UserDashboard/Update/Update';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import './MainDashboard.css';
import BarCharts from '../../components/UserDashboard/Charts/BarCharts';
import BookingPieChart from '../../components/UserDashboard/Charts/BookingPieChart';

const MainDashboard = () => {
    /* let list = document.querySelectorAll('.navigation li');
    function activeLink(){
        list.forEach((item) => 
        item.classList.remove('hovered'));
        this.classList.add('hovered')
    }
    list.forEach((item)=> 
    item.addEventListener('mouseover', activeLink)); */
    
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="main-dashboard">
            <div className="dash-container">
                <div className={isActive ? "navigation active" : "navigation"}>
                    <ul>
                        <li>
                            <Link to="">
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faApple}></FontAwesomeIcon>
                                </span>
                                <span className="title"><strong>Hot Wheels</strong> </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faHome}></FontAwesomeIcon>
                                </span>
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                        {!admin && <> 
                        <li>
                            <Link to={`${url}/myBookings`}>
                                <span className="icon">
                                    <FontAwesomeIcon className="faIcon" icon={faPeopleArrows}></FontAwesomeIcon>
                                </span>
                                <span className="title">My Bookings</span>
                            </Link>
                        </li>
                            <li>
                                <Link to={`${url}/sendReview`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faChargingStation}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Add a Review</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/payment`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faHandsHelping}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Payment</span>
                                </Link>
                            </li>
                        </>}
                        {admin && <>
                            <li>
                                <Link to={`${url}/addCarDetails`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faAmbulance}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Add a Car</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/makeAdmin`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faUser}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/manageAllBooking`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faCartPlus}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Manage All Booking</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/manageAllCar`}>
                                    <span className="icon">
                                        <FontAwesomeIcon className="faIcon" icon={faCarCrash}></FontAwesomeIcon>
                                    </span>
                                    <span className="title">Manage All Car</span>
                                </Link>
                            </li>
                        </>}
                        <li>
                            <Link to="">
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
                    {/* ADD CHARTS  */}
                    <AdminRoute path={`${path}/manageAllBooking`}>
                    <div className="graphBox">
                        <div className="chartBox">
                            <BookingPieChart />
                        </div>
                        <div className="chartBox">
                            <BarCharts />
                        </div>
                    </div>
                    </AdminRoute>
                    {/* DETAILS  */}
                    <div className="details">
                        {/*order details list  */}
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <Switch>
                                    <Route path={`${path}/myBookings`}>
                                        <MyOrders />
                                    </Route>
                                    <Route path={`${path}/sendReview`}>
                                        <SendReview></SendReview>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <AdminRoute path={`${path}/addCarDetails`}>
                                        <AddCarDetails></AddCarDetails>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageAllBooking`}>
                                        <ManageAllBooking />
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageAllCar`}>
                                        <ManageAllCar />
                                    </AdminRoute>
                                    <AdminRoute exact path={`${path}/update/:id`}>
                                        <Update />
                                    </AdminRoute>
                                </Switch>
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

export default MainDashboard;