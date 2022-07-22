import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const CarCard = ({ car, loading }) => {
    const { name, _id, price, img, mileage } = car;
    const history = useHistory();
    const handleCarDetail = (id) => {
        const uri = `/carDetails/${id}`
        history.push(uri)
    }
    return (
        <Col xl={4} md={6} lg={6} sm={12} className="py-5" >
            <div className="car-card">
                <Fade bottom duration={1000} distance="40px">
                    <h2>{name?.charAt(0).toUpperCase() + name?.slice(1)}</h2>
                    <div className="car-img">
                        <img src={img} alt="" onClick={() => handleCarDetail(_id)}/>
                    </div>
                    <div className="match-details">
                        <div className="team1">
                            <h3 className="team-name">
                                Mileage <br /> <span>{mileage}</span>
                            </h3>
                        </div>
                        <div className="team2">
                            <h3 className="team-name">
                                Price <br /> <span>{price}</span>
                            </h3>
                        </div>
                    </div>
                </Fade>
            </div>
        </Col>
    );
};

export default CarCard;