import React, { useState } from 'react';

export default function Content() {
  const [activeSection, setActiveSection] = useState('available');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const getBackgroundColor = (section) => {
    switch (section) {
      case 'available':
        return '#7df10e';
      case 'reserved':
        return '#0eeff1';
      case 'borrowed':
        return '#820ef1';
      case 'history':
        return '#f1100e';
      default:
        return '';
    }
  };

  return (
    <div className="content">
      <div className="button-holder">
        <button
          id="avail"
          onClick={() => handleButtonClick('available')}
          style={{
            backgroundColor: activeSection === 'available' ? getBackgroundColor('available') : '',
          }}
        >
          Available
        </button>
        <button
          id="res"
          onClick={() => handleButtonClick('reserved')}
          style={{
            backgroundColor: activeSection === 'reserved' ? getBackgroundColor('reserved') : '',
          }}
        >
          Reserved
        </button>
        <button
          id="bor"
          onClick={() => handleButtonClick('borrowed')}
          style={{
            backgroundColor: activeSection === 'borrowed' ? getBackgroundColor('borrowed') : '',
          }}
        >
          Borrowed
        </button>
        <button
          id="his"
          onClick={() => handleButtonClick('history')}
          style={{
            backgroundColor: activeSection === 'history' ? getBackgroundColor('history') : '',
          }}
        >
          History
        </button>
      </div>
      <div className="display">
        <div className={`disp ${activeSection === 'available' ? 'active' : ''}`} id="available"></div>
        <div className={`disp ${activeSection === 'reserved' ? 'active' : ''}`} id="reserved"></div>
        <div className={`disp ${activeSection === 'borrowed' ? 'active' : ''}`} id="borrowed"></div>
        <div className={`disp ${activeSection === 'history' ? 'active' : ''}`} id="history"></div>
      </div>
    </div>
  );
}
