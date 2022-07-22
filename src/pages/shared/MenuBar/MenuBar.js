import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import ProfilePopper from '../../../components/ProfilePopper/ProfilePopper';

const MenuBar = () => {
    const { user, Logout } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const {photoURL: img} = user;

    const handleLogout = () => {
        Logout();
        toast.error('Logged Out')
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
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
        fixed="top"
        className={(isSticky || isCollapsed) ? "text-kalo shadow-sm bg-white py-2" : "py-4"}>
            <Container>
                <Navbar.Brand 
                as={Link}
                to="/home"
                >
                    <img width="40"
                    height="40"
                    className="d-inline-block align-top mr-2" src="https://i.ibb.co/mqrYLbg/car-1.png" alt="" />
                    <strong>Hot Wheels</strong>
                    </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/carsCollection">Available Cars</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
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