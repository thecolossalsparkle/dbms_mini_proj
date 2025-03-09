import React from 'react';

const AppointmentAnalytics = ({ dateRange }) => {
  return (
    <div className="appointment-analytics">
      <div className="chart-placeholder" style={{ height: '250px', background: '#f9fafb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Appointment Distribution by Day - {dateRange.start.toLocaleDateString()} to {dateRange.end.toLocaleDateString()}</p>
      </div>
      <div className="chart-legend" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#4169E1', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Scheduled</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#48BB78', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Completed</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#F56565', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Cancelled</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAnalytics; 