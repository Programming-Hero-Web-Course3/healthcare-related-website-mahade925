import React, { useEffect, useState } from 'react';
import Dentist from '../Dentist/Dentist';
import './Dentists.css'

const Dentists = () => {
    const [dentists, setDentists] = useState([]);
    useEffect(() => {
        fetch('dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data))
    }, [])
    return (
        <div className="dentists-container">
            <h2>Our Dentists</h2>
            <div className="dentists">
                {
                    dentists.map(dentist => <Dentist key={dentist.id} dentist={dentist}></Dentist>)
                }
            </div>
        </div>
    );
};

export default Dentists;