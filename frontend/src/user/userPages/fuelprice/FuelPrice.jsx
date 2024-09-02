import React, { useState, useEffect } from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa'; // Removed FaMicrophone import
import { useNavigate } from 'react-router-dom';
import './FuelPrice.scss';

const FuelPrice = () => {
  const [city, setCity] = useState('Karnataka');
  const [petrolPrice, setPetrolPrice] = useState('Rs. 100.58');
  const [dieselPrice, setDieselPrice] = useState('Rs. 85.05');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setCity(e.target.value);
    // Ideally, call a function to fetch fuel prices based on new city here
  };

  useEffect(() => {
    // Fetch updated prices when city changes
    // Example: fetchPrices(city);
  }, [city]);

  return (
    <div className="fuel-price-page">
      <div className="search-bar">
        <FaArrowLeft 
          className="icon arrow-icon" 
          aria-label="Back to services"
          onClick={() => navigate('/services')} 
        />
        <input
          type="text"
          placeholder="Search city"
          className="search-input"
          onChange={handleSearch}
        />
        <FaSearch className="icon search-icon" aria-label="Search" />
        {/* Removed FaMicrophone component */}
      </div>
      <h2 className="title">Fuel Price</h2>
      <div className="price-card">
        <div className="price-details">
          <div>
            <h3 className="city-name">{city}</h3>
            <p className="date">13 March 2024</p>
          </div>
          <div className="prices">
            <div className="price">
              <p className="label">Petrol</p>
              <p className="value">{petrolPrice}</p>
            </div>
            <div className="price">
              <p className="label">Diesel</p>
              <p className="value">{dieselPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPrice;
