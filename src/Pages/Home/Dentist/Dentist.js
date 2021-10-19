import React from 'react';
import './Dentist.css'

const Dentist = ({ dentist }) => {
    const { img, job, name } = dentist;
    return (
        <div className="dentist"> 
            <img src={img} alt="" />
            <h1 className="dentist-title">{name}</h1>
            <h4>{job}</h4>
            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </div>
    );
};

export default Dentist;