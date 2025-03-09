import React, { useState } from 'react';
import Calendar from '../components/appointments/Calendar';
import AppointmentSchedule from '../components/appointments/AppointmentSchedule';
import UpcomingAppointments from '../components/appointments/UpcomingAppointments';
import { handleNewItem } from '../utils/buttonHandlers';
import './Appointments.css';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'day', 'week', or 'month'
  
  // Sample appointment data - would come from an API in a real application
  const appointments = [
    {
      id: 1,
      patientName: 'John Smith',
      date: '2023-05-15',
      time: '09:00',
      type: 'Check-up',
      status: 'confirmed'
    },
    {
      id: 2,
      patientName: 'Mary Johnson',
      date: '2023-05-15',
      time: '10:30',
      type: 'Consultation',
      status: 'confirmed'
    },
    {
      id: 3,
      patientName: 'Robert Wilson',
      date: '2023-05-16',
      time: '11:15',
      type: 'Follow-up',
      status: 'pending'
    },
    {
      id: 4,
      patientName: 'Jennifer Brown',
      date: '2023-05-16',
      time: '14:45',
      type: 'Operation',
      status: 'confirmed'
    },
    {
      id: 5,
      patientName: 'Michael Clark',
      date: '2023-05-17',
      time: '09:30',
      type: 'New Patient',
      status: 'confirmed'
    },
    {
      id: 6,
      patientName: 'Susan White',
      date: '2023-05-18',
      time: '13:00',
      type: 'Follow-up',
      status: 'cancelled'
    },
    {
      id: 7,
      patientName: 'David Miller',
      date: '2023-05-19',
      time: '11:00',
      type: 'Consultation',
      status: 'confirmed'
    },
    {
      id: 8,
      patientName: 'Patricia Davis',
      date: '2023-05-22',
      time: '10:00',
      type: 'Check-up',
      status: 'confirmed'
    },
    {
      id: 9,
      patientName: 'James Martin',
      date: '2023-05-22',
      time: '15:30',
      type: 'Emergency',
      status: 'confirmed'
    },
    {
      id: 10,
      patientName: 'Elizabeth Taylor',
      date: '2023-05-23',
      time: '09:15',
      type: 'Consultation',
      status: 'pending'
    }
  ];
  
  // Handle date selection
  const handleDateSelect = (date) => {
    // Clone the date and reset hours to avoid timezone issues
    const newSelectedDate = new Date(date);
    newSelectedDate.setHours(0, 0, 0, 0);
    
    // Update the selected date
    setSelectedDate(newSelectedDate);
    
    // If in month view, switch to day view when a date is clicked
    if (viewMode === 'month') {
      setViewMode('day');
    }
  };
  
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h1>Appointments</h1>
        <p>Schedule and manage patient appointments</p>
      </div>
      
      <div className="appointments-actions">
        <button 
          className="new-appointment-btn"
          onClick={() => handleNewItem('appointment')}
        >
          New Appointment
        </button>
        
        <div className="view-toggles">
          <button 
            className={viewMode === 'day' ? 'active' : ''}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button 
            className={viewMode === 'week' ? 'active' : ''}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button 
            className={viewMode === 'month' ? 'active' : ''}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
        </div>
      </div>
      
      <div className="appointments-main-grid">
        <div className="appointments-calendar-column">
          <Calendar 
            selectedDate={selectedDate}
            viewMode={viewMode}
            onDateSelect={handleDateSelect}
            appointments={appointments}
          />
        </div>
        
        <div className="appointments-details-column">
          <div className="appointment-schedule-section">
            <h2>Schedule for {selectedDate.toLocaleDateString()}</h2>
            <AppointmentSchedule 
              selectedDate={selectedDate}
              viewMode={viewMode} 
              appointments={appointments.filter(apt => {
                const aptDate = new Date(apt.date);
                return aptDate.getDate() === selectedDate.getDate() &&
                      aptDate.getMonth() === selectedDate.getMonth() &&
                      aptDate.getFullYear() === selectedDate.getFullYear();
              })}
            />
          </div>
          
          <div className="upcoming-appointments-section">
            <h2>Upcoming Appointments</h2>
            <UpcomingAppointments appointments={appointments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 