import React from 'react';
import Footer from '../../shared/Footer/Footer';
import HomeHeader from '../../shared/HomeHeader/HomeHeader';
import MenuBar from '../../shared/MenuBar/MenuBar';
import Banner from '../Banner/Banner';
import BuyUsedCar from '../BuyUsedCar/BuyUsedCar';
import Reviews from '../Reviews/Reviews';
import TopCarsCollection from '../TopCarsCollection/TopCarsCollection';

const Home = () => {
    return (
        <div>
            {/* <MenuBar></MenuBar>
            <Banner></Banner> */}
            <HomeHeader/>
            <TopCarsCollection></TopCarsCollection>
            <BuyUsedCar/>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;