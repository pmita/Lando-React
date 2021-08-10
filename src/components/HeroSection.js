import React from 'react';
import Button from './Button';
//importing assets
import bannerVideo from '../assets/videos/video-2.mp4';
import bannerImg from '../assets/images/img-2.jpg';

const HeroSection = () => {
    return(
        <div className="hero-container">

            <video width="320" height="240" autoPlay loop muted>
                <source src={bannerVideo} type="video/mp4"></source>
            </video>
            <img src={bannerImg} alt='background of hero section' />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER   <i className="fas fa-play-circle"/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;