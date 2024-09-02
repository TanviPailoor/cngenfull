import React from 'react';
import { FaUser, FaHistory, FaMapMarkerAlt, FaCog, FaSignOutAlt, FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProfileDrawer.scss'; // Import the SCSS file

const ProfileDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    toggleDrawer(); 
    navigate('/myprofile'); 
  };

  const handleNavigateToLocation = () => {
    toggleDrawer();
    navigate('/location');
  };

  const handleNavigateToSettings = () => {
    toggleDrawer();
    navigate('/settings');
  };

  const handleLogout = () => {
    toggleDrawer();
    navigate('/login'); 
  };

  return (
    <div
      className={`profile-drawer ${isOpen ? 'open' : ''}`}
    >
      <div className="drawer-content">
        <button 
          onClick={toggleDrawer}
          className="close-button"
        >
          <FaArrowLeft className="icon" />
        </button>

        <div className="profile-content">
          <FaUser className="profile-icon" />
          <h2 className="profile-title">Profile</h2>

          <ul className="menu-list">
            <li className="menu-item" onClick={handleNavigateToProfile}>
              <FaUser className="menu-icon" />
              <span>My Profile</span>
            </li>
            <li className="menu-item">
              <FaHistory className="menu-icon" />
              <span>History</span>
            </li>
            <li className="menu-item" onClick={handleNavigateToLocation}>
              <FaMapMarkerAlt className="menu-icon" />
              <span>Delivery Address</span>
            </li>
            <li className="menu-item" onClick={handleNavigateToSettings}>
              <FaCog className="menu-icon" />
              <span>Settings</span>
            </li>
            <li className="menu-item" onClick={handleLogout}>
              <FaSignOutAlt className="menu-icon" />
              <span>Logout</span>
            </li>
            <li className="menu-item">
              <FaQuestionCircle className="menu-icon" />
              <span>Help and FAQs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
