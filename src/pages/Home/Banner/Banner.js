import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="slider-container">
                    <Row className="align-items-center text-light ">
                        <Col md={6}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/RyMCjJg/exterior-right-front-three-quarter-10-removebg-preview-removebg-preview.png"
                                alt="First slide"
                            />
                        </Col>
                        <Col md={6}>
                            <div className="slider-caption">
                                <h3>Buy Your First Dream Car</h3>
                                <p>Best Car Dealers In Kolkata</p>
                                <Button variant="success">Pre Book</Button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="slider-container">
                    <Row className="align-items-center text-light ">
                        <Col md={6}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/qYL4TGY/Png-Item-1268281.png"
                                alt="First slide"
                            />
                        </Col>
                        <Col md={6}>
                            <div className="slider-caption">
                                <h3>Buy A Used Car With Confidence</h3>
                                <p></p>
                                <Button variant="outline-success">Buy Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="slider-container">
                    <Row className="align-items-center text-light ">
                        <Col md={6}>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/crpwH2X/b99d9fad678e8e1f12c2362046983d8b.png"
                                alt="First slide"
                            />
                        </Col>
                        <Col md={6}>
                            <div className="slider-caption">
                                <h3>SELL YOUR CAR</h3>
                                <p>FIND THR BEST CAR FOR YOU</p>
                                <Button variant="outline-success">Explore More</Button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-75"
                        src="https://i.ibb.co/9HVDvtT/CCM-H2-removebg-preview.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Banner;