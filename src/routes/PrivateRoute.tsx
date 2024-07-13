import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

interface Props {
    component: React.ComponentType;
    path: string;
    role: 'patient' | 'professional' | 'admin';
}

const PrivateRoute: React.FC<Props> = ({ component: Component, path, role }) => {
    const { isAuthenticated, role: userRole } = useSelector((state: RootState) => state.auth);

    return (
        <Route
            path={path}
            element={
                isAuthenticated && userRole === role ? (
                    <Component />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute;
