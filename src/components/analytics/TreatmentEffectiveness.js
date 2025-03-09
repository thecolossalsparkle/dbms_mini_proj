import React from 'react';

const TreatmentEffectiveness = () => {
  return (
    <div className="treatment-effectiveness">
      <div className="chart-placeholder" style={{ height: '250px', background: '#f9fafb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Treatment Effectiveness (%) by Approach</p>
      </div>
      <div className="chart-legend" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#4169E1', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Physical Therapy</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#48BB78', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Medication Only</span>
        </div>
        <div style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#ECC94B', marginRight: '5px', borderRadius: '2px' }}></div>
          <span>Combined Approach</span>
        </div>
      </div>
    </div>
  );
};

export default TreatmentEffectiveness; 