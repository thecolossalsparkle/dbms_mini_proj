import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityFeed.css';

const ActivityFeed = () => {
  // Mock activity data - in a real app, this would come from an API
  const activities = [
    {
      id: 1,
      type: 'appointment',
      icon: '📅',
      title: 'New appointment scheduled',
      description: 'James Wilson booked a consultation for Friday, May 19.',
      time: '10 minutes ago',
      actionLink: '/appointments',
      actionText: 'View'
    },
    {
      id: 2,
      type: 'patient',
      icon: '👤',
      title: 'New patient registered',
      description: 'Sarah Miller completed registration through the patient portal.',
      time: '2 hours ago',
      actionLink: '/patients',
      actionText: 'View profile'
    },
    {
      id: 3,
      type: 'prescription',
      icon: '💊',
      title: 'Prescription renewed',
      description: 'Dr. Thompson renewed a prescription for Emily Davis.',
      time: '3 hours ago',
      actionLink: '/patients',
      actionText: 'Details'
    },
    {
      id: 4,
      type: 'message',
      icon: '✉️',
      title: 'New message received',
      description: 'Michael Clark sent a question about his upcoming procedure.',
      time: 'Yesterday',
      actionLink: '/messages',
      actionText: 'Read'
    },
    {
      id: 5,
      type: 'alert',
      icon: '⚠️',
      title: 'Lab results ready',
      description: 'Lab results for Jennifer Brown are ready for review.',
      time: 'Yesterday',
      actionLink: '/lab-results',
      actionText: 'Review'
    }
  ];

  return (
    <div className="activity-feed">
      {activities.length === 0 ? (
        <div className="activity-empty">
          <p>No recent activity to display</p>
        </div>
      ) : (
        activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-icon icon-${activity.type}`}>
              {activity.icon}
            </div>
            <div className="activity-content">
              <h4 className="activity-title">{activity.title}</h4>
              <p className="activity-description">{activity.description}</p>
              <div className="activity-meta">
                <span className="activity-time">{activity.time}</span>
                <Link to={activity.actionLink} className="activity-action">
                  {activity.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ActivityFeed; 