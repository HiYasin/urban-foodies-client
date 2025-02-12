import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //console.log(user);

    //google login/registration

    const googleSign = (provider) => {
        return signInWithPopup(auth, provider);

    }
    const updateInfo = ( name, photoURL ) =>{
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }
    
    //for registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //for login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //for logout
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    //observe login
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            //console.log(currentUser);
        });
        return () => unsubscriber;
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        googleSign,
        updateInfo,
        signInUser,
        createUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;