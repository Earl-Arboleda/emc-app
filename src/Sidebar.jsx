import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Set initial state to true (collapsed)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLoginClick = () => {
    // Handle login button click
    // Open login pop-up or navigate to the login page
  };

  const handleCalendarClick = () => {
    // Handle calendar button click
    // Open the calendar page or perform desired action
  };

  const handleThirdButtonClick = () => {
    // Handle third button click
    // Perform desired action
  };

  return (
    <div>
      <div className={`toggle-button ${isCollapsed ? 'expanded' : ''}`} onClick={toggleSidebar}>
        <span className={`icon ${isCollapsed ? 'collapsed' : ''}`}>&#9776;</span>
      </div>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className={`toggle-button ${isCollapsed ? 'expanded' : ''}`} onClick={toggleSidebar}>
          <span className={`icon ${isCollapsed ? 'collapsed' : ''}`}>&#9776;</span>
        </div>
        {!isCollapsed && (
          <div className="sidebar-content">
            <div className="user-card">
              <div className="avatar">
                {/* Add user's picture */}
              </div>
              <div className="card-details">
                <p className="username">
                  {/* Add user's name */}
                </p>
              </div>
            </div>
            <button className="sidebar-button" onClick={handleLoginClick}>
              Inventory
            </button>
            <button className="sidebar-button" onClick={handleCalendarClick}>
              Calendar
            </button>
            <button className="sidebar-button" onClick={handleThirdButtonClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
