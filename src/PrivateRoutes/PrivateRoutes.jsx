import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingSpinner from '../pages/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user) {
        return children
    }

    return (
        <Navigate replace  /* MUST USE THIS STACTURE FOR TARGETED LOCATION**/ state={{from: location}}/** */  to='/login'>

        </Navigate>
    );
};

export default PrivateRoutes;