import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
        <div>
            <h1>{sItems?.title}</h1>
            <h1>This is Service {serviceId}</h1>
            <h2>This page is protected by PrivateRoute</h2>
        </div>
    );
};

export default Details;