import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCarAlt, faFileContract, faGasPump, faRupeeSign, faTachometerAlt, faTags, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import MenuBar from '../shared/MenuBar/MenuBar';
import './CarDetails.css';

const CarDetals = () => {
    const { id } = useParams();
    const [specificCar, setSpecificCar] = useState({});
    const { name, price, img, mileage, _id, rating, engine, fuel, seats, serviceCost, transmission } = specificCar;


    const history = useHistory();
    useEffect(() => {
        const url = `http://localhost:5000/availableCars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificCar(data))
    }, [ ])

    const handleCarBooking = (id) => {
        const uri = `/carBooking/${id}`
        history.push(uri)
    }
    return (
        <div className="car-details py-5">
            <MenuBar />
            <Container className="py-5">
                {/* <h2 className="text-center pb-4">Car Details Here</h2> */}
                <Row className="car-details py-3">
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-img-box">
                            <img src={specificCar?.img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <div className="car-content-box d-flex">
                            <div className="car-flex">
                                <h2>{name}</h2>
                                <Rating
                                    emptySymbol="far fa-star star-color"
                                    fullSymbol="fas fa-star star-color"
                                    initialRating={rating}
                                    readonly>Rate</Rating>
                                <div className="car-price py-2">
                                    <FontAwesomeIcon className="price-icon" icon={faRupeeSign} />
                                    <span>{price}</span>
                                    <h6>*Ex-showroom Price in New Delhi</h6>
                                    <h6>EMI Starts Rs.13,114 /Month</h6>
                                </div>
                            </div>
                            <div className="offer-icon py-5">
                                <Button onClick={() => handleCarBooking(_id)} variant="warning">Book Your Car</Button>
                                <div className="tagIcon py-2"> <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                                    <span>Don't miss out on the best offers for this month</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='car-keySpec py-3'>
                    <h2>Key Specs of {name}</h2>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Mileage (upto)</p>
                                <p>{mileage || "Not available"}{mileage && "kmpl"} </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faCarAlt}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Engine (upto)</p>
                                <p>{engine || "Not available"} {engine && "cc"}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Fuel</p>
                                <p>{fuel || "Not available"}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faAccessibleIcon}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Transmission</p>
                                <p>{transmission || "Not available"}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faWheelchair}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Seats</p>
                                <p>{seats || "Not available"}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={4} xs={6}>
                        <div className="car-specification">
                            <div className="spec-icon">
                                <FontAwesomeIcon icon={faFileContract}></FontAwesomeIcon>
                            </div>
                            <div className="spec-text">
                                <p>Service Cost</p>
                                <p>{serviceCost && "$"} {serviceCost || "Not available"}{serviceCost && "/yr"}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CarDetals;