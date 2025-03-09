import React from 'react';
import { FaUser, FaFileAlt, FaStethoscope, FaDollarSign } from 'react-icons/fa';
import './StatCard.css';

const StatCard = ({ title, value, icon, color }) => {
  const getIcon = () => {
    switch (icon) {
      case 'users': return <FaUser />;
      case 'file': return <FaFileAlt />;
      case 'stethoscope': return <FaStethoscope />;
      case 'dollar': return <FaDollarSign />;
      default: return null;
    }
  };

  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
      <div className="stat-icon">
        {getIcon()}
      </div>
    </div>
  );
};

export default StatCard; 