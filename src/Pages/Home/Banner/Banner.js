import React from 'react';
import './Banner.css';
import bannerSide from '../../../images/banner-side.png'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="content">
                <div>
                    <h3>Better Life Through</h3>
                    <h1>Better Dentistry</h1>
                    <p>
                        Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.
                    </p>
                    <button className="appointment">Appointment</button>
                </div>
            </div>
            <div className="banner-img">
                <img src={bannerSide} alt="" />
            </div>
        </div>
    );
};

export default Banner;