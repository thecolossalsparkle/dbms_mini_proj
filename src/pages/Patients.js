import React, { useState } from 'react';
import PatientTable from '../components/patients/PatientTable';
import PatientStatistics from '../components/patients/PatientStatistics';
import { handleNewItem } from '../utils/buttonHandlers';
import './Patients.css';

const Patients = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - would come from API in a real application
  const patients = [
    {
      id: 1,
      name: 'Emily Davis',
      age: 42,
      gender: 'Female',
      condition: 'Hypertension',
      status: 'Stable',
      lastVisit: '2023-04-15',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      name: 'Michael Lee',
      age: 56,
      gender: 'Male',
      condition: 'Post Surgery',
      status: 'Review',
      lastVisit: '2023-05-02',
      doctor: 'Dr. Robert Brown'
    },
    // More patients...
  ];

  // Filter patients based on search query
  const filteredPatients = searchQuery 
    ? patients.filter(patient => 
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : patients;

  return (
    <div className="patients-container">
      <div className="patients-header">
        <h1>Patients</h1>
        <p>Manage your patients and their information</p>
      </div>
      
      <div className="patients-actions">
        <button 
          className="add-patient-btn"
          onClick={() => handleNewItem('patient')}
        >
          Add New Patient
        </button>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search patients..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <button className="all-patients-btn" onClick={() => setSearchQuery('')}>
          View All
        </button>
      </div>
      
      <div className="patients-content">
        <div className="patient-list-section">
          <h2>Patient List</h2>
          <PatientTable patients={filteredPatients} />
        </div>
        
        <div className="patient-stats-section">
          <h2>Patient Statistics</h2>
          <PatientStatistics />
        </div>
      </div>
    </div>
  );
};

export default Patients; 