import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Private = () => {
    const {user, userLoading} = useAuth();
    const location = useLocation();
    if (userLoading) {
        return <CircularProgress />
    }
    return user.email ? <Outlet/> : <Navigate to='/signIn' state = {{from: location}} />
};

export default Private;