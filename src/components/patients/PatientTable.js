import React from 'react';
import { handleView, handleEdit, handleDelete } from '../../utils/buttonHandlers';

const PatientTable = ({ patients }) => {
  return (
    <div className="patient-table">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Age/Gender</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Condition</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px 15px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px 15px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: '#4169E1',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    {patient.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{patient.name}</div>
                    <div style={{ fontSize: '12px', color: '#718096' }}>Last Visit: {patient.lastVisit}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '12px 15px' }}>
                {patient.age} years <br />
                <span style={{ color: '#718096' }}>{patient.gender}</span>
              </td>
              <td style={{ padding: '12px 15px' }}>{patient.condition}</td>
              <td style={{ padding: '12px 15px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px',
                  backgroundColor: 
                    patient.status === 'Stable' ? 'rgba(72, 187, 120, 0.1)' : 
                    patient.status === 'Review' ? 'rgba(237, 137, 54, 0.1)' : 
                    'rgba(245, 101, 101, 0.1)',
                  color: 
                    patient.status === 'Stable' ? '#48BB78' : 
                    patient.status === 'Review' ? '#ED8936' : 
                    '#F56565',
                }}>
                  {patient.status}
                </span>
              </td>
              <td style={{ padding: '12px 15px', textAlign: 'center' }}>
                <button 
                  onClick={() => handleView(patient, 'patient')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#4169E1', 
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >👁️</button>
                <button 
                  onClick={() => handleEdit(patient, 'patient')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#48BB78', 
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >✏️</button>
                <button 
                  onClick={() => handleDelete(patient, 'patient')}
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

export default PatientTable; 