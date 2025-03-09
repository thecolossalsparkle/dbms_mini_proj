import React, { useState } from 'react';
import RevenueChart from '../components/analytics/RevenueChart';
import PatientDemographicsChart from '../components/analytics/PatientDemographicsChart';
import AppointmentAnalytics from '../components/analytics/AppointmentAnalytics';
import TreatmentEffectiveness from '../components/analytics/TreatmentEffectiveness';
import './Analytics.css';

const Analytics = () => {
  // Initial date range (last 30 days)
  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);
  
  const [activeRange, setActiveRange] = useState('30days');
  const [dateRange, setDateRange] = useState({
    start: thirtyDaysAgo,
    end: today
  });
  
  const handleRangeChange = (range) => {
    const end = new Date();
    let start = new Date();
    
    switch(range) {
      case '7days':
        start.setDate(end.getDate() - 7);
        break;
      case '30days':
        start.setDate(end.getDate() - 30);
        break;
      case '90days':
        start.setDate(end.getDate() - 90);
        break;
      case '12months':
        start.setMonth(end.getMonth() - 12);
        break;
      default:
        start.setDate(end.getDate() - 30);
    }
    
    setActiveRange(range);
    setDateRange({ start, end });
  };
  
  const handleCustomDateChange = (isStart, date) => {
    if (isStart) {
      setDateRange(prev => ({ ...prev, start: new Date(date) }));
    } else {
      setDateRange(prev => ({ ...prev, end: new Date(date) }));
    }
    setActiveRange('custom');
  };

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h1>Analytics</h1>
        <p>View insights and statistics about your practice</p>
      </div>
      
      <div className="time-range-selector">
        <button 
          className={activeRange === '7days' ? 'active' : ''}
          onClick={() => handleRangeChange('7days')}
        >
          Last 7 Days
        </button>
        <button 
          className={activeRange === '30days' ? 'active' : ''}
          onClick={() => handleRangeChange('30days')}
        >
          Last 30 Days
        </button>
        <button 
          className={activeRange === '90days' ? 'active' : ''}
          onClick={() => handleRangeChange('90days')}
        >
          Last 90 Days
        </button>
        <button 
          className={activeRange === '12months' ? 'active' : ''}
          onClick={() => handleRangeChange('12months')}
        >
          Last 12 Months
        </button>
        
        <div className="custom-range">
          <input 
            type="date" 
            value={dateRange.start.toISOString().split('T')[0]}
            onChange={(e) => handleCustomDateChange(true, e.target.value)}
          />
          <span>to</span>
          <input 
            type="date"
            value={dateRange.end.toISOString().split('T')[0]}
            onChange={(e) => handleCustomDateChange(false, e.target.value)}
          />
        </div>
      </div>
      
      <div className="analytics-grid">
        <div className="revenue-analysis">
          <h2>Revenue Analysis</h2>
          <RevenueChart dateRange={dateRange} />
        </div>
        
        <div className="patient-demographics">
          <h2>Patient Demographics</h2>
          <PatientDemographicsChart />
        </div>
        
        <div className="appointment-analytics">
          <h2>Appointment Analytics</h2>
          <AppointmentAnalytics dateRange={dateRange} />
        </div>
        
        <div className="treatment-effectiveness">
          <h2>Treatment Effectiveness</h2>
          <TreatmentEffectiveness />
        </div>
      </div>
    </div>
  );
};

export default Analytics; 