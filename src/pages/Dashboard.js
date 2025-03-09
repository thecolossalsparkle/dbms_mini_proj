import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/dashboard/StatCard';
import AppointmentList from '../components/dashboard/AppointmentList';
import PatientList from '../components/dashboard/PatientList';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import DemographicsChart from '../components/dashboard/DemographicsChart';
import { handleNewItem } from '../utils/buttonHandlers';
import './Dashboard.css';

const Dashboard = () => {
  // Current date for display
  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  
  // Mock data for stats
  const stats = [
    { title: "Total Patients", value: "1,254", icon: "👤", color: "blue" },
    { title: "Appointments", value: "42", icon: "📅", color: "purple" },
    { title: "New Patients", value: "18", icon: "🆕", color: "orange" },
    { title: "Operations", value: "8", icon: "🩺", color: "green" }
  ];
  
  // Mock data for appointments
  const appointments = [
    { id: 1, patient: "Emily Davis", time: "09:00", period: "AM", status: "confirmed" },
    { id: 2, patient: "Michael Lee", time: "10:30", period: "AM", status: "pending" },
    { id: 3, patient: "Sophia Garcia", time: "01:15", period: "PM", status: "confirmed" },
    { id: 4, patient: "James Wilson", time: "03:00", period: "PM", status: "confirmed" }
  ];

  const [notifications, setNotifications] = useState([
    { id: 1, text: "New patient registration", read: false },
    { id: 2, text: "Appointment rescheduled", read: false }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, from: "Dr. Smith", text: "Please review patient case #1242", read: false },
    { id: 2, from: "Nurse Johnson", text: "Lab results are ready", read: false }
  ]);

  // Toggle notification dropdown
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="today-date">{formattedDate}</p>
      </div>
      
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      
      <div className="dashboard-grid">
        <div className="grid-item">
          <div className="section-header">
            <h2>Today's Appointments</h2>
            <button 
              className="new-btn"
              onClick={() => handleNewItem('appointment')}
            >
              New Appointment
            </button>
          </div>
          <AppointmentList appointments={appointments} />
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <Link to="/appointments" className="view-all">View All Appointments</Link>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="section-header">
            <h2>Recent Patients</h2>
            <button 
              className="new-btn"
              onClick={() => handleNewItem('patient')}
            >
              New Patient
            </button>
          </div>
          <PatientList />
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <Link to="/patients" className="view-all">View All Patients</Link>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="section-header">
            <h2>Activity Feed</h2>
          </div>
          <ActivityFeed />
        </div>
        
        <div className="grid-item">
          <div className="section-header">
            <h2>Demographics</h2>
          </div>
          <DemographicsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 