import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import MenuBar from '../shared/MenuBar/MenuBar';

const Contact = () => {
    return (
        <div className="contact-page py-5">
            <MenuBar />
            <div className="contact-section py-5">
                <Container>
                    <h2>Contact Us</h2>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form className="pt-3">
                                <Form.Group className="mb-1" controlId="formGridAddress1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formGridAddress1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formGridAddress1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formGridAddress1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Photo URL" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                                </Form.Group>
                                <p className="text-danger"></p>
                                <Button className="login-btn" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div>
                                <img src="https://i.ibb.co/Z8HrBsn/5124556.jpg" className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;