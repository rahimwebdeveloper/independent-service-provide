import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import auth from '../../../firebase.init';

const RequreAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();

    if(loading){
        return (
            <h1 style={{height:"400px"}} className=' container d-flex justify-content-center align-items-center'>Loading...</h1>
        );
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children ; 
};

export default RequreAuth;