import React from 'react';
import { AuthContext } from './AuthCOntext';
import { createUserWithEmailAndPassword, GoogleAuthProvider,  signInWithPopup } from 'firebase/auth';
import { auth } from '../Utils/firebase.init';

const AuthProvider = ({children}) => {

    // Google Sign In
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Email Register
    const registerWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const contextValue = {signInwithGoogle, registerWithEmail};
    return (
       <AuthContext value={contextValue}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;