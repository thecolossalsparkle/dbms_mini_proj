import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaCalendarCheck, FaNotesMedical, 
  FaPrescriptionBottleAlt, FaUserMd, FaHeartbeat,
  FaCog, FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

const PatientSidebar = () => {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      // In a real app with routing, this would redirect to login page
      window.location.href = '/login';
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>MediDash</h1>
      </div>
      
      <div className="doctor-profile">
        <img 
          src={currentUser?.imageUrl || "https://randomuser.me/api/portraits/women/65.jpg"} 
          alt="Patient Profile" 
          className="doctor-image" 
        />
        <h3>{currentUser?.name || "Emily Davis"}</h3>
        <p>Patient</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/patient-dashboard" className={location.pathname === '/patient-dashboard' ? 'active' : ''}>
              <FaHome className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/patient-appointments" className={location.pathname === '/patient-appointments' ? 'active' : ''}>
              <FaCalendarCheck className="icon" />
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/patient-records" className={location.pathname === '/patient-records' ? 'active' : ''}>
              <FaNotesMedical className="icon" />
              Medical Records
            </Link>
          </li>
          <li>
            <Link to="/patient-prescriptions" className={location.pathname === '/patient-prescriptions' ? 'active' : ''}>
              <FaPrescriptionBottleAlt className="icon" />
              Prescriptions
            </Link>
          </li>
          <li>
            <Link to="/patient-doctors" className={location.pathname === '/patient-doctors' ? 'active' : ''}>
              <FaUserMd className="icon" />
              My Doctors
            </Link>
          </li>
          <li>
            <Link to="/patient-health" className={location.pathname === '/patient-health' ? 'active' : ''}>
              <FaHeartbeat className="icon" />
              Health Tracker
            </Link>
          </li>
          <li>
            <Link to="/patient-settings" className={location.pathname === '/patient-settings' ? 'active' : ''}>
              <FaCog className="icon" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default PatientSidebar; 