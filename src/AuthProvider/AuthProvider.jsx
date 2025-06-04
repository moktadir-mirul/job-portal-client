import React from 'react';
import { AuthContext } from './AuthCOntext';

const AuthProvider = ({children}) => {
    const contextValue = {title: "Mirul"} ;
    return (
       <AuthContext value={contextValue}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;