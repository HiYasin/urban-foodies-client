import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import useAuth from '../customHooks/useAuth';

const ProtectedRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const currentLocation = useLocation();
    //console.log(currentLocation);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to={'/login'} state={currentLocation?.pathname}></Navigate>;
    };
}
export default ProtectedRouter;