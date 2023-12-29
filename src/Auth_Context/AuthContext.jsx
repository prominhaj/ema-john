import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase_config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";

export const userContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
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

    // Status Info
    const info = {
        authSingUp,
        setUser,
        authSingIn,
        authGoogleHandle,
        authEmailVerification,
        user
    }

    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;