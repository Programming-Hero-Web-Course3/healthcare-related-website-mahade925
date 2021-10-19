import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Blogs = () => {
    return (
        <div className="my-5 container">
            <h1 className="mb-5">Blogs</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1612375689547-b5351e63050b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" className="card-img-top h-100" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Welcome to our new clinic</h5>
                            <p className="card-text">we build our new office this office located in Dhaka Bangladesh. visit our office and give us some feedback</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top h-100" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Meet Doctor Hasan</h5>
                            <p className="card-text">this doctor have 5 years of experince as dentist he is a great dentist in bangladesh.</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top h-100" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Rifat - Same day implants and bridges</h5>
                            <p className="card-text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1152&q=80" className="card-img-top h-100" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Cosmetic Dentist</h5>
                            <p className="card-text">I will give you a complete account of the system, and expound the actual teachings of the great</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;