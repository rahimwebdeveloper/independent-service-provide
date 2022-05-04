import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    return (
        <div className='container mt-5 service-container'>
            <h2 className='text-center'>We Serve The Best Service</h2>
            <section className='service-section mt-5 mb-5'>
                <div>
                    <h2>Real Estate Forms</h2>
                    <p>Find Mi Real Estate! Always Facts. Privacy Friendly. The Best Resources. Unlimited Access. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.</p>
                    <Link to="/checkout">Check Out</Link>
                </div>
                <div>
                    <h2>Business Documents</h2>
                    <p>Business documents are files of various types that record various details regarding an organization's internal and external dealings. They're usually essential for a company's management.</p>
                    <Link to="/checkout">Check Out</Link>
                </div>
                <div>
                    <h2>Family Documents</h2>
                    <p>It is important to locate, list, and review your documentation so that, in the event of your disability or death, your agent will be able to administer your estate according
                        to your wishes. </p>
                    <Link to="/checkout">Check Out</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;