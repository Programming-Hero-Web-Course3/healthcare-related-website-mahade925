import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signInUsingGoogle, createNewUser, error } = useAuth();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <div className="container my-5 w-25">
                <h1 className="my-5">Signup</h1>
                <div className="form-floating mb-3">
                    <input type="text" onBlur={handleName} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" onBlur={handleEmail} id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" onBlur={handlePassword} id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div><br />
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <h5 className="text-danger">{error}</h5>
                <button type="button" onClick={() => createNewUser(name, email, password)} className="btn btn-primary btn-lg w-100 mt-4">Signup</button>
                <h4 className="mt-3">OR</h4>
                <button type="button" onClick={signInUsingGoogle} className="btn btn-primary btn-lg w-100 my-4">Google Sign in</button>
                <NavLink to="/signin" className="create-account">Already have an account ?</NavLink>
            </div>
        </div>
    );
};

export default Signup;