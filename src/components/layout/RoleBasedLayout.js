import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DoctorSidebar from './DoctorSidebar';
import PatientSidebar from './PatientSidebar';
import Header from './Header';
import './Layout.css';

const RoleBasedLayout = ({ children }) => {
  const { currentUser, isDoctor, isPatient } = useAuth();

  // If no user is logged in, just render the children (which should be login/register pages)
  if (!currentUser) {
    return children;
  }

  return (
    <div className="app-container">
      {isDoctor && <DoctorSidebar />}
      {isPatient && <PatientSidebar />}
      <div className="main-content">
        <Header />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RoleBasedLayout; 