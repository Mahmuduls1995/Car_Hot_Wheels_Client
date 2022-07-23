import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import CarCard from '../../shared/CarCard/CarCard';
import './TopCarsCollection.css';

const TopCarsCollection = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://hidden-savannah-51184.herokuapp.com/availableCars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])
    return (
        <div className="top-cars-collection py-3">
            <Container>
                <div className="top-car-header my-3">
                    <h2>Top <span>Cars</span> Collection</h2>
                    <h6>Buy A Used Car With Confidence</h6>
                </div>
                <Row>
                    {
                        loading ? <Spinner animation="border" variant="danger" /> :
                            cars.slice(0, 6).map(car => <CarCard
                                key={car._id}
                                car={car}
                            ></CarCard>)
                    }

                </Row>
                <Toaster />



            </Container>
        </div>
    );
};

export default TopCarsCollection;