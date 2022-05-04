import React from 'react';
import './Footer.css'
import facebook from '../../../Images/logo/facebook.png'
import github from '../../../Images/logo/github.png'
import instagram from '../../../Images/logo/instagram.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-container mt-5'>
            <div >
                <div className='logo-area'>
                    <a target="_blank" href="https://www.facebook.com/rahimwebdeveloper1"><img height={30} src={facebook} title="Facebook" alt="" /></a>
                    <a href="#"><img height={30} src={instagram} title="Instagram" alt="" /></a>
                    <a target="_blank" href="https://github.com/Rahim2725"><img height={30} src={github} title="GitHub" alt="" /></a>
                </div>
                <div className='text-area'>
                    <h4>&copy; {year} || by Notariz Notary Public Sertvice </h4>
                    <a target="_blank" href="https://github.com/Rahim2725"><h4>Abdur Rahim</h4></a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;