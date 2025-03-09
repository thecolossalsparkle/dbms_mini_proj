import React from 'react';
import './Calendar.css';

const Calendar = ({ selectedDate, viewMode, onDateSelect, appointments }) => {
  // Format the date range for display in the header
  const formatDateRange = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    
    if (viewMode === 'day') {
      return selectedDate.toLocaleDateString('en-US', options);
    } else if (viewMode === 'week') {
      const weekStart = new Date(selectedDate);
      weekStart.setDate(selectedDate.getDate() - selectedDate.getDay());
      
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      const start = weekStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      const end = weekEnd.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      
      return `${start} - ${end}`;
    } else {
      return selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
  };

  // Generate day headers (Sun, Mon, Tue, etc.)
  const renderDayHeaders = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="calendar-days-header">
        {days.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
    );
  };

  // Generate calendar grid for month view
  const renderMonthView = () => {
    // Get the first day of the month
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    
    // Get the day of the week of the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Create an array of week rows
    const rows = [];
    let days = [];
    let day = 1;
    
    // Function to get appointments for a specific day
    const getDayAppointments = (year, month, day) => {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return appointments.filter(apt => apt.date === date);
    };
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="day-cell empty"></div>);
    }
    
    // Add cells for each day of the month
    while (day <= lastDay.getDate()) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      const now = new Date();
      const isToday = (
        currentDate.getFullYear() === now.getFullYear() &&
        currentDate.getMonth() === now.getMonth() &&
        currentDate.getDate() === now.getDate()
      );
      const isSelected = (
        currentDate.getFullYear() === selectedDate.getFullYear() &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getDate() === selectedDate.getDate()
      );
      
      const dayAppointments = getDayAppointments(
        selectedDate.getFullYear(), 
        selectedDate.getMonth(), 
        day
      );
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`day-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => {
            // Use direct integer values to create the date to avoid any unexpected conversion
            const year = selectedDate.getFullYear();
            const month = selectedDate.getMonth();
            
            // Log the values for debugging
            console.log('Creating date with:', {year, month, day});
            
            // Create new date with explicit values
            const clickedDate = new Date(year, month, day);
            
            // Reset the time to midnight
            clickedDate.setHours(0, 0, 0, 0);
            
            // Log the resulting date
            console.log('Clicked date:', clickedDate.toISOString());
            
            onDateSelect(clickedDate);
          }}
        >
          <div className="day-number">{day}</div>
          <div className="day-appointments">
            {dayAppointments.length > 0 && (
              <div className="appointment-count">
                {dayAppointments.length}
              </div>
            )}
            {dayAppointments.slice(0, 1).map(apt => (
              <div key={apt.id} className={`day-appointment ${apt.status}`}>
                {apt.patientName.split(' ')[0]}
              </div>
            ))}
            {dayAppointments.length > 1 && (
              <div className="more-appointments">
                +{dayAppointments.length - 1}
              </div>
            )}
          </div>
        </div>
      );
      
      // When we reach the end of the week, create a new row
      if (days.length === 7) {
        rows.push(
          <div key={`week-${rows.length}`} className="week-row">
            {days}
          </div>
        );
        days = [];
      }
      
      day++;
    }
    
    // Add empty cells for days after the last day of the month
    if (days.length > 0) {
      while (days.length < 7) {
        days.push(<div key={`empty-end-${days.length}`} className="day-cell empty"></div>);
      }
      rows.push(
        <div key={`week-${rows.length}`} className="week-row">
          {days}
        </div>
      );
    }
    
    return (
      <div className="month-view">
        {renderDayHeaders()}
        <div className="month-grid">
          {rows}
        </div>
      </div>
    );
  };

  // Generate day view with hour slots
  const renderDayView = () => {
    // Generate hours for the day (8 AM - 6 PM)
    const hours = [];
    for (let i = 8; i <= 18; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? 'PM' : 'AM';
      hours.push(`${hour} ${ampm}`);
    }
    
    // Filter appointments for the selected date
    const dayAppointments = appointments.filter(apt => {
      const aptDate = new Date(apt.date);
      // Compare only the date part (year, month, day) without time
      return aptDate.getFullYear() === selectedDate.getFullYear() && 
             aptDate.getMonth() === selectedDate.getMonth() && 
             aptDate.getDate() === selectedDate.getDate();
    });
    
    return (
      <div className="day-view">
        {renderDayHeaders()}
        <div className="day-view-hours">
          {hours.map(hour => {
            const hourAppointments = dayAppointments.filter(apt => {
              const aptHour = parseInt(apt.time.split(':')[0]);
              return aptHour === parseInt(hour.split(' ')[0]) + (hour.includes('PM') && hour.split(' ')[0] !== '12' ? 12 : 0);
            });
            
            return (
              <div key={hour} className="hour-slot">
                <div className="hour-label">{hour}</div>
                <div className="hour-events">
                  {hourAppointments.map(apt => (
                    <div key={apt.id} className={`appointment-event ${apt.status}`}>
                      <strong>{apt.time}</strong> - {apt.patientName} ({apt.type})
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render view based on viewMode
  const renderCalendarView = () => {
    switch(viewMode) {
      case 'day':
        return renderDayView();
      case 'week':
        return renderWeekView();
      case 'month':
      default:
        return renderMonthView();
    }
  };

  // Generate week view
  const renderWeekView = () => {
    // Generate dates for the week
    const weekDays = [];
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    
    // Generate hours for the day (8 AM - 6 PM)
    const hours = [];
    for (let i = 8; i <= 18; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? 'PM' : 'AM';
      hours.push(`${hour} ${ampm}`);
    }
    
    return (
      <div className="week-view">
        <div className="week-header">
          <div className="hour-label-placeholder"></div>
          {weekDays.map(day => {
            const now = new Date();
            const isToday = (
              day.getFullYear() === now.getFullYear() &&
              day.getMonth() === now.getMonth() &&
              day.getDate() === now.getDate()
            );
            
            const isSelected = (
              day.getFullYear() === selectedDate.getFullYear() &&
              day.getMonth() === selectedDate.getMonth() &&
              day.getDate() === selectedDate.getDate()
            );
            
            return (
              <div 
                key={day.getTime()} 
                className={`day-column-header ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  // Create a new date to avoid reference issues
                  const clickedDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
                  clickedDate.setHours(0, 0, 0, 0);
                  onDateSelect(clickedDate);
                }}
              >
                <div className="day-name">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day.getDay()]}</div>
                <div className="day-date">{day.getDate()}</div>
              </div>
            );
          })}
        </div>
        
        <div className="week-grid">
          {hours.map(hour => (
            <div key={hour} className="hour-row">
              <div className="hour-label">{hour}</div>
              {weekDays.map(day => {
                const dayAppointments = appointments.filter(apt => {
                  const aptDate = new Date(apt.date);
                  const aptHour = parseInt(apt.time.split(':')[0]);
                  return aptDate.getDate() === day.getDate() && 
                         aptDate.getMonth() === day.getMonth() && 
                         aptDate.getFullYear() === day.getFullYear() && 
                         aptHour === parseInt(hour.split(' ')[0]) + (hour.includes('PM') && hour.split(' ')[0] !== '12' ? 12 : 0);
                });
                
                return (
                  <div key={day.getTime()} className="day-hour-cell">
                    {dayAppointments.map(apt => (
                      <div key={apt.id} className={`week-appointment ${apt.status}`}>
                        <div className="time">{apt.time}</div>
                        <div className="patient">{apt.patientName}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="calendar-component">
      <div className="calendar-header">
        <h2>{formatDateRange()}</h2>
      </div>
      
      <div className="calendar-content">
        {renderCalendarView()}
      </div>
    </div>
  );
};

export default Calendar; 