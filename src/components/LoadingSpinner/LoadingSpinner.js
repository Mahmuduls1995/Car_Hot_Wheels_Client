import React from 'react';
import { Image } from 'react-bootstrap';
import loader from "../../image/814.svg"
const LoadingSpinner = () => {
    return (
        <section className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
            <Image src={loader}/>
        </section>
    );
};

export default LoadingSpinner;