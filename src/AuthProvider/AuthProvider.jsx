import React from 'react';
import { AuthContext } from './AuthCOntext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Utils/firebase.init';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const contextValue = {signInwithGoogle};
    return (
       <AuthContext value={contextValue}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;