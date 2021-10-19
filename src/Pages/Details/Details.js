import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const [serviceDetail, setServiceDetail] = useState([])
    const {serviceId} = useParams();

    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, []);

    
    const sItems = serviceDetail.find((item) => item.id === parseInt(serviceId));
    console.log(sItems);

    return (
        <div className="detail">
            <div className="detail-img">
                <img src={sItems?.img} alt="" />
            </div>
            <div className="detail-content">
                <h1>{sItems?.title}</h1>
                <p>{sItems?.desc}</p>
                <button type="button" className="btn btn-primary btn-lg">Get It</button>
            </div>
        </div>
    );
};

export default Details;