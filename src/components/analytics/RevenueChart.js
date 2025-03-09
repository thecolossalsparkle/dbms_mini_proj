import React from 'react';

const RevenueChart = ({ dateRange }) => {
  // In a real application, you would use a charting library like Chart.js or Recharts
  return (
    <div className="revenue-chart">
      <div className="chart-placeholder" style={{ height: '250px', background: '#f9fafb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Revenue Chart - {dateRange.start.toLocaleDateString()} to {dateRange.end.toLocaleDateString()}</p>
      </div>
      <div className="chart-legend" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#4169E1', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>This Year</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#48BB78', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Last Year</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart; 