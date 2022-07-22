import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import Fade from 'react-reveal/Fade';
import useAuth from '../../../../components/hooks/useAuth';
import './ReviewCard.css';

const ReviewCard = ({ item }) => {
    const { user } = useAuth();
    const {photoURL: img } = user;
    return (
        <div className="py-5">
            <div className="box">
                <div className="imgBox">
             
                    <img src={ img ||"https://i.ibb.co/N3VZMY1/Cam-Scanner-07-29-2020-23-26-27-1.jpg"} alt="" />

                    {/* <img src="https://i.ibb.co/N3VZMY1/Cam-Scanner-07-29-2020-23-26-27-1.jpg" alt="" /> */}


                </div>
                <p>{item.comment}</p>
                <Rating
                    emptySymbol="far fa-star star-color"
                    fullSymbol="fas fa-star star-color"
                    initialRating={item.rating}
                    readonly>Rate</Rating>
                <h4>{item.name} <br /> <span>{item.address || 'Dhaka, Bangladesh'}</span></h4>
            </div>
        </div>
    );
};

export default ReviewCard;