import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthCOntext';
import { createUserWithEmailAndPassword, GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Utils/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Google Sign In
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Email Register
    const registerWithEmail = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Email LogIn
    const emailLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update USer Info

    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl});
    } 

    // User Sign Out
    const signOutUser = () => {
        return signOut(auth)
    }
    // User Auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        } 
    }, []);


    const contextValue = {signInwithGoogle, registerWithEmail, emailLogIn, signOutUser, user, loading, updateUser};


    return (
       <AuthContext value={contextValue}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;