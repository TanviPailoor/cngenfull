import React from 'react';
import Header from '../../../user/userComponents/header/Header';
import Navbar from '../../../user/userComponents/navbar/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Servicespage.scss'; // Import the SCSS file

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const navigateToFuelPrice = () => {
    navigate('/fuelprice'); 
  };

  return (
    <div className="services-page">
      <Header />
      <div className="services-content p-4">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft className="icon" />
        </button>
        <h2 className="title">Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3 className="service-title">Challan</h3>
            <p className="service-description">Check your challan details</p>
          </div>
          <div
            className="service-item clickable"
            onClick={navigateToFuelPrice}
          >
            <h3 className="service-title">Fuel Price</h3>
            <p className="service-description">Check fuel price across the country</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ServicesPage;
