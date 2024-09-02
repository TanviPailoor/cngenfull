import React, { useState } from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import './FuelPrice.scss'; // Import the SCSS file

const FuelPrice = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  const handleSearch = () => {
    console.log('Search city:', city);
  };

  return (
    <div className="fuel-price-container">
      <Header />
      <div className="fuel-price-content">
        <div className="search-bar">
          <FaArrowLeft onClick={handleBack} className="back-icon" />
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="city-input"
            />
            <button onClick={handleSearch} className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
        <h2 className="title">Fuel Price</h2>
        <div className="price-card">
          <div className="price-card-header">
            <div className="location-info">
              <h3 className="location-name">Karnataka</h3>
              <p className="date">13 March 2024</p>
            </div>
            <div className="fuel-prices">
              <div className="fuel-type">
                <p className="fuel-label">Petrol</p>
                <p className="fuel-price">Rs. 100.58</p>
              </div>
              <div className="fuel-type">
                <p className="fuel-label">Diesel</p>
                <p className="fuel-price">Rs. 85.05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default FuelPrice;
