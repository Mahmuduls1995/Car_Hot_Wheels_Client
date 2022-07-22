import React from 'react';
import TopBanner from '../../Home/TopBanner/TopBanner';
import MenuBar from '../MenuBar/MenuBar';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <MenuBar/>
            <TopBanner/>
        </div>
    );
};

export default HomeHeader;