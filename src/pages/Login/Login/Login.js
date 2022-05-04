import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [
        signInWithEmailAndPassword,
        user,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSign = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className="container text-center login-container">
            <h2 className="form-title">Please Login</h2>
            <form onSubmit={handleSign}>
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email" required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required />
                <p>Password <span className="reset">Reset</span></p>
                <input className="form-button" type="submit" value="Login" />
            </form>
            <p className="">New Create Account ? <Link to="/register">Register</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;