import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaUserInjured, FaCalendarCheck, 
  FaNotesMedical, FaPrescriptionBottleAlt, 
  FaChartLine, FaCog, FaSignOutAlt
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      alert('Logged out successfully!');
      // In a real app, you would redirect to login page or clear auth tokens
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>MediDash</h1>
      </div>
      
      <div className="doctor-profile">
        <img 
          src="https://randomuser.me/api/portraits/men/36.jpg" 
          alt="Doctor Profile" 
          className="doctor-image" 
        />
        <h3>Dr. John Smith</h3>
        <p>Cardiologist</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <FaHome className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/patients" className={location.pathname === '/patients' ? 'active' : ''}>
              <FaUserInjured className="icon" />
              Patients
            </Link>
          </li>
          <li>
            <Link to="/appointments" className={location.pathname === '/appointments' ? 'active' : ''}>
              <FaCalendarCheck className="icon" />
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/medical-records" className={location.pathname === '/medical-records' ? 'active' : ''}>
              <FaNotesMedical className="icon" />
              Medical Records
            </Link>
          </li>
          <li>
            <Link to="/prescriptions" className={location.pathname === '/prescriptions' ? 'active' : ''}>
              <FaPrescriptionBottleAlt className="icon" />
              Prescriptions
            </Link>
          </li>
          <li>
            <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
              <FaChartLine className="icon" />
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
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

export default Sidebar; 