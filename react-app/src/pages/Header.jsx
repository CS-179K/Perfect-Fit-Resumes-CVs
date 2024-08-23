import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import pfp from '../assets/profile2.jpg';

const Header = ({ isLoggedIn, setIsLoggedIn, setUserID }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      setDropdownOpen(false);
      navigate('/login');
    } else {
      setDropdownOpen(prev => !prev);
    }
  };

  const handleProfileOptionClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
    setUserID(0);
    navigate('/login')
    setDropdownOpen(false);
  };

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  const handleHistoryButtonClick = () => {
    navigate('/');
  };

  return (
    <div id='header'>
      <Link to="/" className="headerText">
        Perfect Fit Resumes and Cover Letters
      </Link>
      <div id='homeButton' onClick={handleHomeButtonClick}>Home</div>
      {isLoggedIn && (
        <div id='historyButton' onClick={handleHistoryButtonClick}>History</div>
      )}
      <img
        src={pfp}
        alt="Profile Picture"
        className="pfp"
        onClick={handleProfileClick}
      />
      {dropdownOpen && (
        <div className="profile-dropdown-menu">
          <button id='firstButtonProfileDropdown'onClick={() => handleProfileOptionClick('/profile')}>Profile</button>
          <button id='secondButtonProfileDropdown'onClick={handleSignOutClick}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default Header;