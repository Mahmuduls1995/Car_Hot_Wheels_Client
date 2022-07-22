import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Form, Button, Row, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/MenuBar/MenuBar';
import './BookingCar.css';
import toast, { Toaster } from 'react-hot-toast';

const BookingCar = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const { email } = user;
    const [specificDetail, setSpecificDetail] = useState({});
    const { name } = specificDetail;
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/availableCars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSpecificDetail(data))
    }, [])

    const onSubmit = data => {
        data.carId = id;
        data.status = "pending";
        data.orderTime = new Date().toLocaleDateString('en-GB');
        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Booking Succesful')
                    reset();
                    history.push('/carsCollection')
                }
            })
    }
    return (
        <div className="car-booking py-5">
            <MenuBar />
            <Container className="py-5">
                <h2 className="text-center py-2">Booking Confirmation</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" type="text" {...register("CarName", { required: true })} defaultValue={name} />
                                <label>Name</label>
                                <input
                                    className="our-form-input"
                                    type="text"
                                    defaultValue={user.displayName}
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="our-form-input"
                                    defaultValue={user.email}
                                    {...register("email", { required: true })}
                                    placeholder="Your Email"
                                />
                                <label>Your Phone Number</label>
                                <input
                                    type="number"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("phone", { required: true })}
                                    placeholder="Phone Number"
                                />
                                <label>Test Drive Date</label>
                                <input
                                    type="date"
                                    date="{{date}}" timezone="[[timezone]]"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("testDriveDate", { required: true })}
                                    placeholder="Test Drive Date"
                                />
                                <textarea
                                    type="textarea"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("address", { required: true })}
                                    placeholder="Address"
                                />
                                 <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                        </Row>
                    </div>

                    <div className="text-center mt-4">
                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                            Confirm Booking
                        </Button>
                    </div>
                </form>
                <Toaster/>

            </Container>
        </div>
    );
};

export default BookingCar;