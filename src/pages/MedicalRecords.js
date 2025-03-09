import React, { useState } from 'react';
import RecordFilter from '../components/medical-records/RecordFilter';
import RecordTable from '../components/medical-records/RecordTable';
import './MedicalRecords.css';

const MedicalRecords = () => {
  const [filterType, setFilterType] = useState('All Records');
  const [sortBy, setSortBy] = useState('Date (Newest)');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - would come from API in a real application
  const records = [
    {
      id: 1,
      patient: { id: 'PT-0042', name: 'James Wilson' },
      recordType: 'Lab Result',
      date: '2023-10-12',
      description: 'Blood work - Cholesterol Panel'
    },
    {
      id: 2,
      patient: { id: 'PT-0081', name: 'Emma Thompson' },
      recordType: 'Diagnosis',
      date: '2023-10-10',
      description: 'Hypertension - Stage 1'
    },
    // More records...
  ];

  const handleNewRecord = () => {
    console.log('Creating new record...');
    // Show modal or navigate to create record form
  };

  return (
    <div className="medical-records-container">
      <div className="records-header">
        <h1>Medical Records</h1>
        <p>View and manage patient medical records</p>
      </div>
      
      <div className="records-actions">
        <button className="new-record-btn" onClick={handleNewRecord}>
          + New Record
        </button>
        
        <div className="search-container">
          <input 
            type="text"
            placeholder="Search records by patient name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      <div className="filter-sort-container">
        <RecordFilter 
          filterType={filterType} 
          onFilterChange={setFilterType} 
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
      
      <RecordTable 
        records={records} 
        filterType={filterType}
        sortBy={sortBy}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default MedicalRecords; 