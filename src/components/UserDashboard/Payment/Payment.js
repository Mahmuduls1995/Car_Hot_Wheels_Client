import { default as Axios, default as axios } from "axios";
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Payment = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const userAmount = data.amount;
        const order = {
            "_id": "62d944fef8168532725adfc2",
            "packageName": "The Roller Coaster",
            "name": "Mahmudul",
            "email": "sheikhmahmudul95@gmail.com",
            "phone": "+8801823594398",
            "bookingDate": "2020-02-12",
            "packageId": "62d92241924ee63e34b5727f",
            "amount": userAmount,
            "status": "Pending",
            "orderTime": "05/01/2022"
        };
        const strAmount = order.amount;
        const amount = parseInt(strAmount)
        const orderData = {
            "amount": amount * 100,
            "currency": "USD",
            receipt: "receipt#1",
            notes: {
                key1: "value3",
                key2: "value2"
            }
        }
        axios.post('https://hidden-savannah-51184.herokuapp.com/createOrder', orderData)
            .then(res => {
                const response = res;
                const { data } = response;
                const options = {
                    key: process.env.RAZOR_PAY_TEST_KEY,
                    name: "WaterPark",
                    amount: data.amount,
                    description: "Payment",
                    order_id: data.id,
                    handler: async (response) => {
                        try {
                            const paymentId = response.razorpay_payment_id;
                            const url = `https://hidden-savannah-51184.herokuapp.com/capture/${paymentId}`;
                            const captureResponse = await Axios.post(url, {});
                            console.log(captureResponse.data);
                            window.location.reload();
                        } catch (err) {
                            console.log(err);
                        }
                    },
                    theme: {
                        color: "#00ffee",
                    },
                };
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            })

    }
    return (
        <div>
            <h2 className='mb-3'>Pay Using Razorpay...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col md={12} xs={12} className="pr-md-4">
                            <Row className="align-items-center">
                                <Col xs={12} className="d-flex align-items-center justify-content-center my-3">
                                    <div className="w-75">
                                        <input
                                            className="our-form-input"
                                            type="number"
                                            {...register("amount", { required: true, min: 1, max: 99 })}
                                            defaultValue=""
                                            placeholder='Only 2 digit Number Enter Like- "15"'
                                        />
                                        {errors.amount && "Enter Correct Amount"}
                                    </div>
                                    <div className="text-center">
                                        <Button type="submit" className="btn-main py-0 py-md-2">
                                            Pay Now
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <div className="paymentgateway-img" style={{ width: "100%" }}>
                                <img src="https://i.ibb.co/ZLZ4xKY/razorpay.png" className='img-fluid' alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </form>
        </div>
    );
};

export default Payment;