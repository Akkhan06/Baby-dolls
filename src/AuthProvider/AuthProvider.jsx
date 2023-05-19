import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googlePrivider = new GoogleAuthProvider()

    // EMAIL AND PASS TO CREATE A USER ACCOUNT
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LOGIN USER BY EMAIL AND PASSWORD
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LOGIN USER BY GOOGLE PROVIDER
    const loginGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googlePrivider)
    }

    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: image
           })
     }

     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })

        return () => unsubscribe()
     },[])
 



    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        updateUser,
        loginGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;