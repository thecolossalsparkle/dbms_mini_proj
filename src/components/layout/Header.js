import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // In a real app, you would trigger a search action here
  };
  
  const handleNotifications = () => {
    alert('Notifications panel would open here');
  };
  
  const handleMessages = () => {
    alert('Messages panel would open here');
  };

  return (
    <header className="app-header">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
      
      <div className="header-actions">
        <button 
          className="notification-button"
          onClick={handleNotifications}
        >
          <FaBell />
          <span className="badge">3</span>
        </button>
        
        <button 
          className="message-button"
          onClick={handleMessages}
        >
          <FaEnvelope />
          <span className="badge">5</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 