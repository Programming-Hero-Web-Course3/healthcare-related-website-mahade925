import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../images/not-found.jpg'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={NotFoundImg} className="w-50 pt-5" alt="" />
        </div>
    );
};

export default NotFound;