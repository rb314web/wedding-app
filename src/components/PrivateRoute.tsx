import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;