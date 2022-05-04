import React from 'react';
import profile from '../../Images/profile.png'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div>
                <div className=' text-center img-container'>
                    <img src={profile} alt="" />
                    <h1 className='text-center'>Md Abdur Rahim</h1>
                </div>
                <div className='info-container'>
                    <div className='info-area'>
                        <h2>About Me</h2>
                        <p>Hey! It's Md Abdur Rahim and I'm a Frontend Web Developer located in Bangladesh. I've done remote projects for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am a Professional Digital Marketing. </p>
                    </div>
                    <div className='skill-area'>
                        <h2> My Skills</h2>
                        <div className='skills'>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>BOOTSTRAP</div>
                            <div>TAILWIND</div>
                            <div>JAVASCRIPT</div>
                            <div>REACT JS</div>
                            <div>SEO</div>
                            <div>ON PAGE SEO</div>
                            <div>FACEBOOK MARKETING</div>
                            <div>YOUTUBE MARKETING</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;