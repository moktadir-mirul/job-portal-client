import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthCOntext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading) {
        return <Loader></Loader>
    }
    if(!user) {
        return <Navigate state={location?.pathname} to={"/login"}></Navigate>
    }
    return children;
};

export default PrivateRoute;