import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SendReview = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Thank for Your Feedback!')
                    reset();
                    history.push('/')
                }
            })

    }
    return (
        <>
            <div className="send-review-section">
                <h2>Say Something About Our Site </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                                <Row>
                                    <Col md={6}>
                                        <label>Name</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={user.displayName}
                                            {...register("name", { required: true })}
                                            placeholder="Your Name"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="our-form-input"
                                            defaultValue={user.email}
                                            {...register("email", { required: true })}
                                            placeholder="Your Email"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <label>Rate Our Site</label>
                                        <select
                                            className="our-form-input"
                                            defaultValue="5"
                                            {...register("rating", { required: true })}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="our-form-input"
                                            defaultValue=""
                                            {...register("address", { required: true })}
                                            placeholder="Your Address"
                                        />
                                    </Col>
                                </Row>
                                <label>Description</label>
                                <textarea
                                    type="textarea"
                                    style={{ height: '150px' }}
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("comment", { required: true })}
                                    placeholder="Comments on Our site"
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
        </>
    );
};

export default SendReview;