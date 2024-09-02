import React from 'react';
import { FaArrowLeft, FaStar, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.scss'; // Import the SCSS file

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
      <div className="container">
        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
        >
          <FaArrowLeft className="icon" />
        </button>

        <div className="content">
          <h2 className="title">Settings</h2>

          <ul className="settings-list">
            <li className="settings-item cursor-pointer">
              <FaStar className="icon" />
              <span>Rate us</span>
            </li>
            <li className="settings-item cursor-pointer">
              <FaInfoCircle className="icon" />
              <span>App info</span>
            </li>
            <li className="settings-item cursor-pointer">
              <FaTimesCircle className="icon" />
              <span>Delete Account</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
