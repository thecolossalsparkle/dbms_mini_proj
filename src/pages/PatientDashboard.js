import React, { useState } from 'react';
import { FaCalendarCheck, FaFileMedical, FaUserMd, FaPills } from 'react-icons/fa';
import StatCard from '../components/dashboard/StatCard';
import { useAuth } from '../contexts/AuthContext';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const { currentUser } = useAuth();
  
  // Get current date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  
  // Stats for patient dashboard
  const stats = [
    { title: 'Upcoming Appointments', value: '2', icon: 'calendar', color: 'blue' },
    { title: 'Prescriptions', value: '3', icon: 'pills', color: 'green' },
    { title: 'Medical Records', value: '8', icon: 'file', color: 'purple' },
    { title: 'My Doctors', value: '2', icon: 'doctor', color: 'orange' }
  ];
  
  // Mock data for upcoming appointments
  const appointments = [
    { id: 1, doctor: "Dr. John Smith", specialty: "Cardiology", time: "09:00", date: "May 15, 2023", status: "confirmed" },
    { id: 2, doctor: "Dr. Sarah Johnson", specialty: "Dermatology", time: "14:30", date: "May 22, 2023", status: "pending" }
  ];
  
  // Mock data for prescriptions
  const prescriptions = [
    { id: 1, medication: "Lisinopril", dosage: "10mg", frequency: "Once daily", prescribed: "Apr 10, 2023", refills: 2 },
    { id: 2, medication: "Atorvastatin", dosage: "20mg", frequency: "Once daily", prescribed: "Apr 10, 2023", refills: 2 },
    { id: 3, medication: "Metformin", dosage: "500mg", frequency: "Twice daily", prescribed: "Mar 15, 2023", refills: 1 }
  ];
  
  // Mock data for recent test results
  const testResults = [
    { id: 1, test: "Blood Pressure", result: "128/82 mmHg", date: "Apr 10, 2023", status: "normal" },
    { id: 2, test: "Blood Glucose", result: "105 mg/dL", date: "Apr 10, 2023", status: "normal" },
    { id: 3, test: "Cholesterol", result: "210 mg/dL", date: "Apr 10, 2023", status: "elevated" }
  ];

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Appointment reminder: Dr. Smith tomorrow at 9:00 AM", read: false },
    { id: 2, text: "New test results available", read: false }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, from: "Dr. Smith", text: "Your blood pressure looks good. Keep up the good work!", read: false },
    { id: 2, from: "Nurse Johnson", text: "Please remember to bring your medication list to your next appointment", read: false }
  ]);

  // Toggle notification dropdown
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <p className="welcome-message">Welcome back, {currentUser?.name || 'Patient'}</p>
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
      
      <div className="dashboard-content">
        <div className="dashboard-column">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Upcoming Appointments</h2>
              <button className="action-button">Schedule New</button>
            </div>
            <div className="appointments-list">
              {appointments.map(appointment => (
                <div key={appointment.id} className={`appointment-item ${appointment.status}`}>
                  <div className="appointment-info">
                    <h3>{appointment.doctor}</h3>
                    <p>{appointment.specialty}</p>
                    <p className="appointment-time">{appointment.date} at {appointment.time}</p>
                  </div>
                  <div className="appointment-status">
                    <span className={`status-badge ${appointment.status}`}>
                      {appointment.status}
                    </span>
                    <div className="appointment-actions">
                      <button className="action-link">Reschedule</button>
                      <button className="action-link">Cancel</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-all-button">View All Appointments</button>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Recent Test Results</h2>
            </div>
            <div className="test-results-list">
              {testResults.map(test => (
                <div key={test.id} className="test-result-item">
                  <div className="test-info">
                    <h3>{test.test}</h3>
                    <p className="test-date">{test.date}</p>
                  </div>
                  <div className="test-result">
                    <p className="result-value">{test.result}</p>
                    <span className={`status-badge ${test.status}`}>
                      {test.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-all-button">View All Results</button>
            </div>
          </div>
        </div>
        
        <div className="dashboard-column">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Current Prescriptions</h2>
            </div>
            <div className="prescriptions-list">
              {prescriptions.map(prescription => (
                <div key={prescription.id} className="prescription-item">
                  <div className="prescription-info">
                    <h3>{prescription.medication}</h3>
                    <p>{prescription.dosage} - {prescription.frequency}</p>
                    <p className="prescription-date">Prescribed: {prescription.prescribed}</p>
                  </div>
                  <div className="prescription-refills">
                    <span className="refills-badge">
                      {prescription.refills} refills left
                    </span>
                    <button className="action-link">Request Refill</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-all-button">View All Prescriptions</button>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Health Reminders</h2>
            </div>
            <div className="reminders-list">
              <div className="reminder-item">
                <div className="reminder-icon"><FaCalendarCheck /></div>
                <div className="reminder-info">
                  <h3>Annual Physical</h3>
                  <p>Due in 2 months</p>
                </div>
              </div>
              <div className="reminder-item">
                <div className="reminder-icon"><FaFileMedical /></div>
                <div className="reminder-info">
                  <h3>Blood Work</h3>
                  <p>Due in 2 weeks</p>
                </div>
              </div>
              <div className="reminder-item">
                <div className="reminder-icon"><FaUserMd /></div>
                <div className="reminder-info">
                  <h3>Specialist Follow-up</h3>
                  <p>Due in 1 month</p>
                </div>
              </div>
              <div className="reminder-item">
                <div className="reminder-icon"><FaPills /></div>
                <div className="reminder-info">
                  <h3>Medication Review</h3>
                  <p>Due in 3 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard; 