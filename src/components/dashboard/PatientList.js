import React from 'react';
import './PatientList.css';

const PatientList = () => {
  // Mock data for patients
  const patients = [
    {
      id: 1,
      name: 'Emily Davis',
      age: 42,
      gender: 'Female',
      condition: 'Hypertension',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'Michael Lee',
      age: 56,
      gender: 'Male',
      condition: 'Post Surgery',
      status: 'Review'
    },
    {
      id: 3,
      name: 'Sophia Garcia',
      age: 29,
      gender: 'Female',
      condition: 'Pregnancy',
      status: 'Stable'
    },
    {
      id: 4, 
      name: 'James Wilson',
      age: 68,
      gender: 'Male',
      condition: 'Heart Attack',
      status: 'Critical'
    }
  ];

  return (
    <div className="patient-list">
      {patients.map(patient => (
        <div key={patient.id} className="patient-item">
          <div className="patient-details">
            <h4>{patient.name}</h4>
            <div className="patient-info">
              <span>{patient.age} years</span>
              <span>{patient.gender}</span>
              <span>{patient.condition}</span>
            </div>
          </div>
          <div className={`status-badge ${patient.status.toLowerCase()}`}>
            {patient.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList; 