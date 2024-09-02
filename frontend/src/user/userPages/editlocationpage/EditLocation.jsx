import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaTrash, FaPencilAlt, FaHome, FaBriefcase } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditLocationPage.scss';

const EditLocationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locations, setLocations] = useState([
    { type: 'HOME', address: '2464 Royal Ln. Mesa, New Jersey 45463', icon: FaHome },
    { type: 'WORK', address: '3891 Ranchview Dr. Richardson, California 62639', icon: FaBriefcase }
  ]);
  const [editingLocation, setEditingLocation] = useState(null);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    if (location.state) {
      const { address, addressType } = location.state;
      setLocations((prevLocations) => 
        prevLocations.some(loc => loc.type === addressType) 
        ? prevLocations.map(loc =>
            loc.type === addressType
              ? { ...loc, address }
              : loc
          )
        : [...prevLocations, { type: addressType, address, icon: addressType === 'home' ? FaHome : FaBriefcase }]
      );
    }
  }, [location.state]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = (location) => {
    setEditingLocation(location);
    setNewAddress(location.address);
  };

  const handleDelete = (locationType) => {
    setLocations(locations.filter(location => location.type !== locationType));
  };

  const handleSave = () => {
    if (editingLocation) {
      setLocations(locations.map(location =>
        location.type === editingLocation.type
          ? { ...location, address: newAddress }
          : location
      ));
      setEditingLocation(null);
      setNewAddress('');
    }
  };

  return (
    <div className="edit-location-page">
      <div className="header">
        <button onClick={handleBack} className="back-button">
          <FaArrowLeft />
        </button>
        <h2 className="title">My Address</h2>
      </div>

      <div className="locations">
        {locations.map((location) => (
          <div key={location.type} className="location-card">
            <div className="location-info">
              <div className="location-icon">
                <location.icon />
              </div>
              <div className="location-details">
                <p className="location-type">{location.type}</p>
                {editingLocation?.type === location.type ? (
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="address-input"
                  />
                ) : (
                  <p className="location-address">{location.address}</p>
                )}
              </div>
            </div>
            <div className="location-actions">
              {editingLocation?.type === location.type ? (
                <button onClick={handleSave} className="save-button">
                  Save
                </button>
              ) : (
                <>
                  <button onClick={() => handleEdit(location)} className="edit-button">
                    <FaPencilAlt />
                  </button>
                  <button onClick={() => handleDelete(location.type)} className="delete-button">
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditLocationPage;
