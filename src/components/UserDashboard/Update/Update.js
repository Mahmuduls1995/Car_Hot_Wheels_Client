import React, { useEffect, useState } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router';

const Update = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        const url = `https://hidden-savannah-51184.herokuapp.com/availableCars/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                    setCar({})
                }
            })
        history.push('/dashboard/manageAllCar')
    };
    console.log(car);

    useEffect(() => {
        const url = `https://hidden-savannah-51184.herokuapp.com/availableCars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])

    return (
        <div className="container py-5">
            <h2>Update <span style={{ color: 'orange' }}>{car.name}</span> Car Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Car Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue={car.name}
                                        {...register("name", { required: true })}
                                        placeholder="Car Name"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Mileage</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        defaultValue={car.mileage}
                                        {...register("mileage", { required: true })}
                                        placeholder="Car Mileage"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Car Price</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue={car.price}
                                        {...register("price", { required: true })}
                                        placeholder="Car Price"
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Car Image</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue={car.img}
                                        {...register("img", { required: true })}
                                        placeholder="Put Car Image Link"
                                    />
                                </Col>
                            </Row>
                            <label>Car Details</label>
                            <textarea
                                type="textarea"
                                style={{ height: '150px' }}
                                className="our-form-input"
                                defaultValue=""
                                {...register("details")}
                                placeholder="Type Car Details"
                            />
                            <br />
                            {/* <Button type="submit">Send</Button> */}
                        </Col>
                    </Row>
                </div>

                <div className="text-center mt-4">
                    <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                        Submit
                    </Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default Update;