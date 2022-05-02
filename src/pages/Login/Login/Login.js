import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const handleSign = event => {

    }
    return (
        <div className="container text-center login-container">
            <h2 className="form-title">Please Login</h2>
            <form onSubmit={handleSign}>
                <input type="email" name="email" id="" placeholder="Email" required />
                <input type="password" name="password" id="" placeholder="Password" required />
               <p>Password <span className="reset">Reset</span></p>
                <input className="form-button" type="submit" value="Login" />
            </form>
            <p className="">New Create Account ? <Link to="/register">Register</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;