import React from 'react';
import HeroSection from './heroSection';
import Offer from './offer';
import ChooseUs from './chose';
import "./styles.css";

const Creativity = () => {
    return (
        <>
            <HeroSection className='hero-sec' />
            <Offer/>
            <ChooseUs/>
        </>
    );
}

export default Creativity;
