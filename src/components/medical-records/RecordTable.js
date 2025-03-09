import React from 'react';
import { handleView, handleEdit, handleDelete } from '../../utils/buttonHandlers';

const RecordTable = ({ records, filterType, sortBy, searchQuery }) => {
  // Apply filtering
  let filteredRecords = records;
  if (filterType !== 'All Records') {
    filteredRecords = records.filter(record => record.recordType === filterType);
  }

  // Apply search
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredRecords = filteredRecords.filter(record => 
      record.patient.name.toLowerCase().includes(query) || 
      record.patient.id.toLowerCase().includes(query) ||
      record.description.toLowerCase().includes(query)
    );
  }
  
  // Apply sorting
  const sortedRecords = [...filteredRecords];
  switch(sortBy) {
    case 'Date (Newest)':
      sortedRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'Date (Oldest)':
      sortedRecords.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'Patient Name':
      sortedRecords.sort((a, b) => a.patient.name.localeCompare(b.patient.name));
      break;
    case 'Record Type':
      sortedRecords.sort((a, b) => a.recordType.localeCompare(b.recordType));
      break;
    default:
      break;
  }

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="record-table">
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e2e8f0' }}>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Patient</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Record Type</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '12px 15px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedRecords.map(record => (
            <tr key={record.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px 15px' }}>
                <div style={{ fontWeight: 'bold' }}>{record.patient.name}</div>
                <div style={{ fontSize: '12px', color: '#718096' }}>ID: {record.patient.id}</div>
              </td>
              <td style={{ padding: '12px 15px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px',
                  backgroundColor: 
                    record.recordType === 'Lab Result' ? 'rgba(66, 153, 225, 0.1)' : 
                    record.recordType === 'Diagnosis' ? 'rgba(237, 100, 166, 0.1)' : 
                    record.recordType === 'Treatment' ? 'rgba(72, 187, 120, 0.1)' : 
                    'rgba(237, 137, 54, 0.1)',
                  color: 
                    record.recordType === 'Lab Result' ? '#4299E1' : 
                    record.recordType === 'Diagnosis' ? '#ED64A6' : 
                    record.recordType === 'Treatment' ? '#48BB78' : 
                    '#ED8936',
                }}>
                  {record.recordType}
                </span>
              </td>
              <td style={{ padding: '12px 15px' }}>{formatDate(record.date)}</td>
              <td style={{ padding: '12px 15px' }}>{record.description}</td>
              <td style={{ padding: '12px 15px', textAlign: 'center' }}>
                <button 
                  onClick={() => handleView(record, 'medical record')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#4169E1', 
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >👁️</button>
                <button 
                  onClick={() => handleEdit(record, 'medical record')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#48BB78', 
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >✏️</button>
                <button 
                  onClick={() => handleDelete(record, 'medical record')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#F56565',
                    cursor: 'pointer'
                  }}
                >🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable; 