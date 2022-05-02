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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt nemo, voluptas pariatur neque aut quae, consequuntur quisquam officia voluptatibus veritatis incidunt quod aperiam ut amet non a, eum vitae.</p>
                    <Link to="/checkout">Check Out</Link>
                </div>
                <div>
                    <h2>Business Documents</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt nemo, voluptas pariatur neque aut quae, consequuntur quisquam officia voluptatibus veritatis incidunt quod aperiam ut amet non a, eum vitae.</p>
                    <Link to="/checkout">Check Out</Link>
                </div>
                <div>
                    <h2>Family Documents</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt nemo, voluptas pariatur neque aut quae, consequuntur quisquam officia voluptatibus veritatis incidunt quod aperiam ut amet non a, eum vitae.</p>
                    <Link to="/checkout">Check Out</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;