import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();

  // If not logged in, redirect to login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified and user's role is not included, redirect to appropriate dashboard
  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    // Redirect to the appropriate dashboard based on user's role
    if (currentUser.role === 'doctor') {
      return <Navigate to="/doctor-dashboard" replace />;
    } else if (currentUser.role === 'patient') {
      return <Navigate to="/patient-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  // User is authenticated and authorized
  return children;
};

export default ProtectedRoute; 