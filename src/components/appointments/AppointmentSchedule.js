import React from 'react';
import { handleConfirm, handleCancel, handleEdit } from '../../utils/buttonHandlers';
import './AppointmentSchedule.css';

const AppointmentSchedule = ({ selectedDate, viewMode, appointments }) => {
  // Function to sort appointments by time
  const sortedAppointments = [...appointments].sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
  });

  return (
    <div className="appointment-schedule-component">
      {sortedAppointments.length === 0 ? (
        <div className="no-appointments">
          <p>No appointments scheduled for this day.</p>
        </div>
      ) : (
        <div className="appointments-list">
          {sortedAppointments.map(appointment => (
            <div key={appointment.id} className={`appointment-item ${appointment.status}`}>
              <div className="appointment-time">
                {appointment.time}
              </div>
              <div className="appointment-details">
                <h3>{appointment.patientName}</h3>
                <p className="appointment-type">{appointment.type}</p>
                <p className="appointment-status">Status: {appointment.status}</p>
              </div>
              <div className="appointment-actions">
                <button 
                  className="action-btn confirm"
                  onClick={() => handleConfirm(appointment)}
                >
                  ✓
                </button>
                <button 
                  className="action-btn reschedule"
                  onClick={() => handleEdit(appointment, 'appointment')}
                >
                  🗓️
                </button>
                <button 
                  className="action-btn cancel"
                  onClick={() => handleCancel(appointment)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentSchedule; 