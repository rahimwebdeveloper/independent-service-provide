import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Register = () => {
    return (
        <div className="container text-center login-container">
            <h2>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder="Name" required />
                <input type="email" name="email" id="" placeholder="Email" required />
                <input type="password" name="password" id="" placeholder="Password" required />
                <input className="form-button" type="submit" value="Login" />
            </form>
            <p className="">Already have an Account ? <Link to="/login">Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;