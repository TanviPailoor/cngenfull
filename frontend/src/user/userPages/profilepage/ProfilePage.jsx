import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSignOutAlt, FaCog, FaPencilAlt, FaArrowLeft, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../../../user/userComponents/header/Header';
import './ProfilePage.scss';

const ProfilePage = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Bhavith T',
    email: 'bhavitth@gmail.com',
    phone: '741852963',
    description: 'I am a car owner who values keeping my vehicle in pristine condition. I\'m looking for a reliable car wash service that offers thorough cleaning and detailing, ensuring my car looks its best after every wash.',
  });

  const [newProfile, setNewProfile] = useState(profile);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleEditProfile = () => {
    setNewProfile(profile);
    setShowEditPopup(true);
  };

  const handleEditLocation = () => {
    navigate('/location');
  };

  const closePopup = () => {
    setShowEditPopup(false);
  };

  const handleUpdateProfile = () => {
    setProfile(newProfile);
    setShowEditPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-content">
        <div className="profile-header">
          <button onClick={() => navigate('/home')} className="back-button">
            <FaArrowLeft className="icon" />
          </button>
          <div className="profile-info">
            <h2 className="title">My Profile</h2>
            <div className="profile-details">
              <div className="avatar">
                <FaUser className="icon" />
              </div>
              <div className="profile-text">
                <h3 className="name">{profile.name}</h3>
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
              <button 
                onClick={handleEditProfile} 
                className="edit-button"
              >
                <FaPencilAlt className="icon" />
              </button>
            </div>
            <p className="description">
              {profile.description}
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <div className="action-item">
            <FaMapMarkerAlt className="icon" />
            <div className="action-text">
              <p className="action-title">Water tank, 9th D btm layout</p>
              <p>Bengaluru 560029</p>
            </div>
            <button onClick={handleEditLocation} className="edit-location">
              <FaPencilAlt className="icon" />
            </button>
          </div>

          <div 
            className="action-item cursor-pointer" 
            onClick={() => navigate('/settings')}
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </div>

          <div 
            className="action-item cursor-pointer" 
            onClick={handleLogout}
          >
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </div>
        </div>

        {showEditPopup && (
          <div className="edit-popup">
            <div className="popup-content">
              <h2 className="popup-title">Edit Profile</h2>
              <input 
                type="text" 
                name="name"
                value={newProfile.name}
                onChange={handleChange}
                placeholder="Name" 
                className="input-field" 
              />
              <input 
                type="email" 
                name="email"
                value={newProfile.email}
                onChange={handleChange}
                placeholder="Email" 
                className="input-field" 
              />
              <input 
                type="tel" 
                name="phone"
                value={newProfile.phone}
                onChange={handleChange}
                placeholder="Phone" 
                className="input-field" 
              />
              <textarea
                name="description"
                value={newProfile.description}
                onChange={handleChange}
                placeholder="Description"
                rows="4"
                className="textarea-field"
              />
              <div className="popup-buttons">
                <button 
                  onClick={closePopup} 
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleUpdateProfile} 
                  className="update-button"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
