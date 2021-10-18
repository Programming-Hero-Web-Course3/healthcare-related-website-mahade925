import React from 'react';
import './Service.css'

const Service = (props) => {
    const { img, title, desc } = props.service;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <button>Details</button>
        </div>
    );
};

export default Service;