import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center top-banner">
                <Col md={4} className="p-md-5 order-2 order-md-1 header-title-content">
                    <Fade left duration={2000} distance="40px">
                        <h1>Buy Your First <br /><strong>Dream Car</strong> </h1>
                        <p className="text-muted my-4 pr-md-5">HotWheels.com is India's leading car search venture that helps users buy cars that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India.</p>
                        <Link to="/carsCollection" className="btn-book">

                            Book Now

                        </Link>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src="https://i.ibb.co/KDhr30d/67354-ai.png" fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default TopBanner;