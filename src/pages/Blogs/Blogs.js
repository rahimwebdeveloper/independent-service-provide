import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h3>Difference between Authorization and Authentication?</h3>
                <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
            </div>

            <div>
                <h3>Why are you using firebase? </h3>
                <p>Firebase works under the flag of Google, and that’s why it provides powerful databases for web and mobile application development.Another interesting advantage of Firebase is its secure and fast hosting service. Firebase Hosting supports all types of content, including web applications, dynamic and static content.</p>
                <h3>What other options do you have to implement authentication?</h3>
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints</p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>The goal of every developer is to create awesome apps.  If you’re a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.</p>
            </div>
        </div>
    );
};

export default Blogs;