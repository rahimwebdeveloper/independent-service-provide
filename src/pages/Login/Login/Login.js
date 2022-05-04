import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [errorMassage, setErrorMassage] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const location = useNavigate();
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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
        navigate(from, {replace : true})
    }
    
    if (sending) {
        return <h1 className='sending d-flex justify-content-center align-items-center
        w-100'>Sending...</h1>;
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