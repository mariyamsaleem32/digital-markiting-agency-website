import React from 'react';
import HeroSection from './heroSection';
import SubHero from './sub-hero'
import Offer from './offer';
import ChooseUs from './chose';
import "./styles.css";

const Mobile = () => {
    return (
        <>
        <HeroSection />
        <SubHero/>
        <Offer/>
        <ChooseUs/>
    </>
    );
}

export default Mobile;
