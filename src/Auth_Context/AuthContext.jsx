import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase_config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification, onAuthStateChanged, signOut } from "firebase/auth";

export const userContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Provider
    const googleProvider = new GoogleAuthProvider();

    // authSing Up
    const authSingUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    // Auth Sing In
    const authSingIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // Send Email Verification
    const authEmailVerification = () => {
       return sendEmailVerification(auth.currentUser);
    }

    // Google Auth
    const authGoogleHandle = () => {
       return signInWithPopup(auth, googleProvider);
    }

    // On Auth State Change
    useEffect(() => {
        const disConnect = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return disConnect();
        }
    }, [])

    // Log Out
    const logOut = () => {
       return signOut(auth)
    }

    // Status Info
    const info = {
        authSingUp,
        authSingIn,
        authGoogleHandle,
        authEmailVerification,
        logOut,
        user,
        loading
    }

    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;