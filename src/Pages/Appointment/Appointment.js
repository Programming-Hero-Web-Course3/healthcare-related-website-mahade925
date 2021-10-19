import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="container my-5 text-left">
        <h1 className="text-center mb-4">Appointment</h1>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress"/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Select Hospital</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Select Doctor</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Select Service</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-12">
                <button type="button" className="btn btn-primary btn-lg">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;