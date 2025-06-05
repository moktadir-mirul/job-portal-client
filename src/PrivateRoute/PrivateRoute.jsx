import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthCOntext';
import { Navigate } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <Loader></Loader>
    }
    if(!user) {
        return <Navigate to={"/login"}></Navigate>
    }
    return children;
};

export default PrivateRoute;