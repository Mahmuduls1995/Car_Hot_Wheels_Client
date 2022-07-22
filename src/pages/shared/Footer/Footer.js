import { faClock, faLocationArrow, faPhoneAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section ">
            <Container>
                <Row>
                    <Col md={3}>
                        <h6 className="pb-2">LET'S GET TOGETHER</h6>
                        <div className="get-together d-flex">
                            <div className="together-icon me-3">
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                            </div>
                            <div className="together-text">
                                <p>60 East 65th Street, NY</p>
                            </div>
                        </div>
                        <div className="get-together d-flex">
                            <div className="together-icon me-3">
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            </div>
                            <div className="together-text">
                                <p>Mon - Sat: 11AM - 11PM
                                    Sun: 11AM - 08PM</p>
                            </div>
                        </div>
                        <div className="get-together d-flex">
                            <div className="together-icon me-3">
                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                            </div>
                            <div className="together-text">
                                <p>Mon - Sat: 01PM - 10PM</p>
                            </div>
                        </div>
                        <div className="get-together d-flex">
                            <div className="together-icon me-3">
                                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                            </div>
                            <div className="together-text">
                                <p>1-800-700-600</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h6 className="pb-2">ABOUT US</h6>
                        <li><Link to="/">Our Facility</Link></li>
                        <li><Link to="/">Our Expert</Link></li>
                        <li><Link to="/">Our Goal</Link></li>
                    </Col>
                    <Col md={3}>
                        <h6 className="pb-2">QUICK MENU</h6>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </Col>
                    <Col md={3}>
                    <h6 className="pb-2">GALLERY</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;