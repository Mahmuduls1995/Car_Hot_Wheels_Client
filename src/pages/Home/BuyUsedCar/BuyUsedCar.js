import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const BuyUsedCar = () => {
    return (
        <div className="buy-used-car-section py-5">
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <Fade left duration={2500} distance="40px">
                            <div className="facilities-text">
                                <h2>Buy Used Cars Online with <span >Hot Wheels Assurance</span> </h2>
                                <h6>A New Way to Buy Used Cars in India</h6>
                                <div style={{ display: 'block', paddingBottom: '3px' }}>
                                    <div className="checked-icon">
                                        <FontAwesomeIcon className="checked-icon-inner" icon={faCheck}></FontAwesomeIcon>
                                    </div>
                                    <p>7 Days money back guarantee</p>
                                </div>
                                <div style={{ display: 'block', paddingBottom: '3px' }}>
                                    <div className="checked-icon">
                                        <FontAwesomeIcon className="checked-icon-inner" icon={faCheck}></FontAwesomeIcon>
                                    </div>
                                    <p>6 Months comprehensive warranty</p>
                                </div>
                                <div style={{ display: 'block', paddingBottom: '3px' }}>
                                    <div className="checked-icon">
                                        <FontAwesomeIcon className="checked-icon-inner" icon={faCheck}></FontAwesomeIcon>
                                    </div>
                                    <p>6 Months pan India RSA</p>
                                </div>
                                <div style={{ display: 'block', paddingBottom: '3px' }}>
                                    <div className="checked-icon">
                                        <FontAwesomeIcon className="checked-icon-inner" icon={faCheck}></FontAwesomeIcon>
                                    </div>
                                    <p>Test own the car for 7 days</p>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade right duration={2500} distance="40px">
                            <div className="model-img">
                                <img src="https://image.freepik.com/free-vector/city-driver-concept-illustration_114360-1209.jpg" alt="" />
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyUsedCar;