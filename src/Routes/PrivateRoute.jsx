import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center text-center align-middle'>
            <span className="loading loading-bars loading-lg text-error"></span>

        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;