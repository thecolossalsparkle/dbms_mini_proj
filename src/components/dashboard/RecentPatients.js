import React from 'react';
import { Link } from 'react-router-dom';
import './RecentPatients.css';

const RecentPatients = () => {
  // Mock data for recent patients
  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      lastVisit: '2023-05-10',
      nextAppointment: '2023-05-24',
      status: 'active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 32,
      gender: 'Female',
      lastVisit: '2023-05-12',
      nextAppointment: '2023-05-26',
      status: 'active'
    },
    {
      id: 3,
      name: 'Michael Davis',
      age: 58,
      gender: 'Male',
      lastVisit: '2023-05-15',
      nextAppointment: null,
      status: 'pending'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      age: 29,
      gender: 'Female',
      lastVisit: '2023-05-08',
      nextAppointment: '2023-06-05',
      status: 'active'
    },
    {
      id: 5,
      name: 'Robert Brown',
      age: 67,
      gender: 'Male',
      lastVisit: '2023-05-03',
      nextAppointment: '2023-05-31',
      status: 'inactive'
    }
  ];

  // Function to format date in a more readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'Not scheduled';
    
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="recent-patients">
      {patients.length === 0 ? (
        <div className="no-patients">No recent patients to display</div>
      ) : (
        <>
          <div className="recent-patient-list">
            {patients.map(patient => (
              <div key={patient.id} className="patient-item">
                <div className="patient-avatar">
                  {getInitials(patient.name)}
                </div>
                <div className="patient-info">
                  <h4 className="patient-name">{patient.name}</h4>
                  <div className="patient-details">
                    <span className="patient-detail">
                      <span className="detail-label">Age:</span> {patient.age}
                    </span>
                    <span className="patient-detail">
                      <span className="detail-label">Gender:</span> {patient.gender}
                    </span>
                    <span className="patient-detail">
                      <span className="detail-label">Last visit:</span> {formatDate(patient.lastVisit)}
                    </span>
                  </div>
                </div>
                
                <div className="patient-actions">
                  <button className="action-button">View</button>
                </div>
                
                <div className={`patient-status status-${patient.status}`}>
                  {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                </div>
              </div>
            ))}
          </div>
          <Link to="/patients" className="see-all-link">
            See all patients
          </Link>
        </>
      )}
    </div>
  );
};

export default RecentPatients; 