import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import Slider from "react-slick";
import './Review.css';
import ReviewCard from './ReviewCard/ReviewCard';
const Reviews = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="nextArrow" {...props} />
    );

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slide: 'div',
        cssEase: 'linear',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };

    return (
        <div className="client-reviews py-5" id="reviews">
            <div className="container">
                <h2>Visitors Feedback</h2>
                {loading && <Spinner animation="border" variant="danger" />}
                <Slider {...settings}>
                    {

                        reviews.map((item) =>
                            <ReviewCard
                                key={item._id}
                                item={item}
                            ></ReviewCard>
                        )}
                </Slider>
                <Toaster />
            </div>
        </div>

    );
};

export default Reviews;