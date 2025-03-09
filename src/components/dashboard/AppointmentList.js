import React from 'react';
import './AppointmentList.css';
import { handleConfirm, handleCancel } from '../../utils/buttonHandlers';

const AppointmentList = ({ appointments }) => {
  // Mock data - would come from API in a real application
  const mockAppointments = [
    { 
      id: 1, 
      time: '09:00', 
      patientName: 'John Smith', 
      type: 'Check-up',
      status: 'confirmed'
    },
    { 
      id: 2, 
      time: '10:30', 
      patientName: 'Mary Johnson', 
      type: 'Consultation',
      status: 'confirmed'
    },
    { 
      id: 3, 
      time: '11:15', 
      patientName: 'Robert Wilson', 
      type: 'Follow-up',
      status: 'confirmed'
    },
    { 
      id: 4, 
      time: '02:45', 
      patientName: 'Jennifer Brown', 
      type: 'Operation',
      status: 'confirmed'
    }
  ];

  return (
    <div className="appointment-list">
      {mockAppointments.map(appointment => (
        <div key={appointment.id} className="appointment-item">
          <div className="appointment-time">
            <span className="time">{appointment.time}</span>
            <span className="period">PM</span>
          </div>
          <div className="appointment-details">
            <h4>{appointment.patientName}</h4>
            <p>{appointment.type}</p>
          </div>
          <div className="appointment-actions">
            <button 
              className="confirm-btn"
              onClick={() => handleConfirm(appointment)}
            >
              <i className="icon">✓</i>
            </button>
            <button 
              className="cancel-btn"
              onClick={() => handleCancel(appointment)}
            >
              <i className="icon">✕</i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList; 