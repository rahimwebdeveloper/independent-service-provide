import React from 'react';
import './Social.css'
import GoogleLogo from '../../../Images/google.svg'
import github from '../../../Images/logo/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Social = () => {
    const [signInWithGoogle ] = useSignInWithGoogle(auth);

    const [signInWithGithub] = useSignInWithGithub(auth);


      
    return (
        <div className='container d-flex justify-content-center'>
            <div>
            <div className="or-content">
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <div className='mt-3'> 
                <button onClick={() => signInWithGoogle()} className='google-auth'>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
            <div className='mt-3'>
                <button onClick={() => signInWithGithub()} className='google-auth'>
                    <img width={35} src={github} alt='' />
                    <p> Continue with GitHub </p>
                </button>
            </div>

            </div>
        </div>
    );
};

export default Social;