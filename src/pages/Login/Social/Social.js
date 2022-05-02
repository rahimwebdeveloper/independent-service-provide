import React from 'react';
import './Social.css'
import GoogleLogo from '../../../Images/google.svg'


const Social = () => {
    return (
        <div>
            <div className="or-content">
                <div className="right"/>
                <p>or</p>
                <div className="left" />
            </div>
            <div>
                <button>
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>

        </div>
    );
};

export default Social;