import React from 'react';
import './UpcomingAppointments.css';

const UpcomingAppointments = ({ appointments }) => {
  // Get today's date for filtering
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Filter and sort upcoming appointments
  const upcomingAppointments = appointments
    .filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate >= today;
    })
    .sort((a, b) => {
      // Sort by date and then by time
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA - dateB;
      }
      
      const timeA = a.time.split(':').map(Number);
      const timeB = b.time.split(':').map(Number);
      return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
    })
    .slice(0, 5); // Only show the next 5 appointments
  
  // Format date function
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="upcoming-appointments-list">
      {upcomingAppointments.length === 0 ? (
        <div className="no-upcoming">No upcoming appointments</div>
      ) : (
        upcomingAppointments.map(appointment => (
          <div key={appointment.id} className={`upcoming-appointment-item ${appointment.status}`}>
            <div className="appointment-date">
              {formatDate(appointment.date)}
            </div>
            <div className="appointment-info">
              <div className="appointment-name">{appointment.patientName}</div>
              <div className="appointment-time-type">
                <span className="time">{appointment.time}</span> - {appointment.type}
              </div>
            </div>
            <div className="appointment-status-indicator">
              <span className={`status-dot ${appointment.status}`}></span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UpcomingAppointments; 