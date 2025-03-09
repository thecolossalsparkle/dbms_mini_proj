import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RoleBasedLayout from './components/layout/RoleBasedLayout';

// Auth pages
import Login from './pages/Login';
import Register from './pages/Register';

// Doctor pages
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import MedicalRecords from './pages/MedicalRecords';
import Prescriptions from './pages/Prescriptions';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

// Patient pages
import PatientDashboard from './pages/PatientDashboard';

import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <RoleBasedLayout>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Redirect root to appropriate dashboard or login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Doctor routes */}
            <Route 
              path="/doctor-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/patients" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Patients />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/appointments" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Appointments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/medical-records" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <MedicalRecords />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/prescriptions" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Prescriptions />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Analytics />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Settings />
                </ProtectedRoute>
              } 
            />
            
            {/* Patient routes */}
            <Route 
              path="/patient-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Add more patient routes as needed */}
            
            {/* Catch-all route - redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </RoleBasedLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
