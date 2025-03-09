import React from 'react';

const PatientDemographicsChart = () => {
  // In a real application, you would use a charting library like Chart.js or Recharts
  return (
    <div className="demographics-chart">
      <div className="chart-placeholder" style={{ height: '250px', background: '#f9fafb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Patient Demographics Chart</p>
      </div>
      <div className="chart-legend" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#4169E1', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>0-18</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#48BB78', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>19-35</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#38B2AC', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>36-50</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#ECC94B', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>51-65</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#ED8936', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>66+</span>
        </div>
      </div>
    </div>
  );
};

export default PatientDemographicsChart; 