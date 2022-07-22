import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import ReviewCard from '../Home/Reviews/ReviewCard/ReviewCard';
import CarCard from '../shared/CarCard/CarCard';
import MenuBar from '../shared/MenuBar/MenuBar';

const CarsCollection = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/availableCars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])
    return (
        <div className="cars-collection-page">
            <MenuBar></MenuBar>
            <div className="container py-5">
                <h2>All Cars Available Here</h2>
                <Row>
                    {
                        loading ? <Spinner animation="border" variant="danger" /> :
                            cars.map(car => <CarCard
                                key={car.id}
                                car={car}
                                loading={loading}
                            ></CarCard>)
                    }
                </Row>
                <Toaster />
            </div>
        </div>
    );
};

export default CarsCollection;