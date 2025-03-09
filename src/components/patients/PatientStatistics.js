import React from 'react';

const PatientStatistics = () => {
  const statistics = [
    { label: 'Total Patients', value: 152 },
    { label: 'New This Month', value: 28 },
    { label: 'Critical Care', value: 12 },
    { label: 'Recovery Rate', value: '85%' },
  ];

  return (
    <div className="patient-statistics">
      <div className="stats-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '15px',
        marginBottom: '20px'
      }}>
        {statistics.map((stat, index) => (
          <div key={index} style={{ 
            padding: '15px', 
            backgroundColor: '#f9fafb', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4169E1' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '14px', color: '#718096' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="age-distribution" style={{ marginTop: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Patients by Age Group</h3>
        <div className="chart-placeholder" style={{ 
          height: '200px', 
          backgroundColor: '#f9fafb', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          Age distribution chart
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics; 