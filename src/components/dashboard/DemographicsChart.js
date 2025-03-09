import React, { useState } from 'react';
import './DemographicsChart.css';

const DemographicsChart = () => {
  const [activeTab, setActiveTab] = useState('age');
  
  // Sample data for demographics
  const ageGroups = [
    { label: '0-17', value: 15, percent: '15%' },
    { label: '18-34', value: 30, percent: '30%' },
    { label: '35-50', value: 25, percent: '25%' },
    { label: '51-65', value: 20, percent: '20%' },
    { label: '65+', value: 10, percent: '10%' }
  ];
  
  const genderData = [
    { label: 'Male', value: 48, percent: '48%', color: '#4299e1' },
    { label: 'Female', value: 49, percent: '49%', color: '#ed64a6' },
    { label: 'Other', value: 3, percent: '3%', color: '#805ad5' }
  ];
  
  const ethnicityData = [
    { label: 'Caucasian', value: 45, percent: '45%', color: '#4299e1' },
    { label: 'African American', value: 20, percent: '20%', color: '#ed8936' },
    { label: 'Hispanic', value: 15, percent: '15%', color: '#48bb78' },
    { label: 'Asian', value: 15, percent: '15%', color: '#805ad5' },
    { label: 'Other', value: 5, percent: '5%', color: '#e53e3e' }
  ];
  
  const renderAgeChart = () => (
    <div className="age-chart">
      <div className="age-bars">
        {ageGroups.map(group => (
          <div 
            key={group.label} 
            className="age-bar" 
            style={{ height: `${group.value * 2}%` }}
          >
            <span className="age-bar-value">{group.percent}</span>
          </div>
        ))}
      </div>
      <div className="age-labels">
        {ageGroups.map(group => (
          <div key={group.label} className="age-label">
            {group.label}
          </div>
        ))}
      </div>
    </div>
  );
  
  const renderGenderChart = () => (
    <div className="gender-chart">
      {genderData.map(item => (
        <div key={item.label} className="gender-bar-container">
          <div 
            className={`gender-bar ${item.label.toLowerCase()}`} 
            style={{ 
              height: `${item.value * 2}px`,
              backgroundColor: item.color 
            }}
          ></div>
          <div className="gender-label">{item.label}</div>
          <div className="gender-value">{item.percent}</div>
        </div>
      ))}
    </div>
  );
  
  const renderEthnicityChart = () => (
    <div className="chart-area">
      <div className="chart-container">
        <div className="pie-chart">
          <div className="pie-segment">
            <div className="pie-hole"></div>
          </div>
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-title">Ethnicity</div>
        <div className="legend-items">
          {ethnicityData.map(item => (
            <div key={item.label} className="legend-item">
              <div className="legend-color" style={{ backgroundColor: item.color }}></div>
              <div className="legend-label">{item.label}</div>
              <div className="legend-value">{item.percent}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const renderActiveChart = () => {
    switch (activeTab) {
      case 'age':
        return renderAgeChart();
      case 'gender':
        return renderGenderChart();
      case 'ethnicity':
        return renderEthnicityChart();
      default:
        return renderAgeChart();
    }
  };
  
  return (
    <div className="demographics-container">
      <div className="chart-tabs">
        <div 
          className={`chart-tab ${activeTab === 'age' ? 'active' : ''}`}
          onClick={() => setActiveTab('age')}
        >
          Age
        </div>
        <div 
          className={`chart-tab ${activeTab === 'gender' ? 'active' : ''}`}
          onClick={() => setActiveTab('gender')}
        >
          Gender
        </div>
        <div 
          className={`chart-tab ${activeTab === 'ethnicity' ? 'active' : ''}`}
          onClick={() => setActiveTab('ethnicity')}
        >
          Ethnicity
        </div>
      </div>
      
      {renderActiveChart()}
    </div>
  );
};

export default DemographicsChart; 