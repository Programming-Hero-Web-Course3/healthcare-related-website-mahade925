import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, img, title, desc } = props.service;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <NavLink to={`/details/${id}`}>
                <button>Details</button>
            </NavLink>
        </div>
    );
};

export default Service;