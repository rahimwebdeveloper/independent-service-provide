import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import './Login.css'
import auth from '../../../firebase.init';
import { async } from '@firebase/util';

const Login = () =>{
    const [email, setEmail] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);


    const handleSign = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleReset = async() => {
        await sendPasswordResetEmail(email)
    }

    if (user) {
        navigate("/home")
    }


    return (
        <div className="container text-center login-container">
            <h2 className="form-title">Please Login</h2>
            <form onSubmit={handleSign}>
                <input onBlur={handleEmailBlur} ref={emailRef} type="email" name="email" id="" placeholder="Email" required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password" required />
                <p>Password <span onClick={handleReset} className="reset">Reset</span></p>
                <input className="form-button" type="submit" value="Login" />
            </form>
            <p style={{ color: "red" }}>{error?.message}</p>
            <p className="">New Create Account ? <Link to="/register">Register</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;