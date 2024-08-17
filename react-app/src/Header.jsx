import React from 'react';
import './Header.css';
import pfp from './assets/profile.jpeg';

const Header = () => {
  return (
    <div id='header'>
      <div className="headerText">Perfect Fit Resumes and Cover Letters</div>
      <img src={pfp} alt="Profile Picture" className="pfp" />
    </div>
  );
}

export default Header;