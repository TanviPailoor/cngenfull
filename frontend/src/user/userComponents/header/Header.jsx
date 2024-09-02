import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/cngenlogo.png';
import { FaBell } from 'react-icons/fa';
import './Header.scss'; // Import the SCSS file

const Header = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="header-notification">
        <FaBell
          className="notification-icon"
          onClick={handleNotificationClick}
        />
      </div>
    </header>
  );
};

export default Header;
