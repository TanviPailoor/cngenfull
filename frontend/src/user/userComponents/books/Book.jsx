import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import TimeKeeper from 'react-timekeeper';
// import Autocomplete from 'react-google-autocomplete';
import './Book.scss'; // Import the SCSS file

const Book = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState('06:00');
  const [address, setAddress] = useState('');
  const [selectedAddressType, setSelectedAddressType] = useState('');
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const today = new Date();

  const handlePlaceSelected = (place) => {
    const formattedAddress = place.formatted_address;
    setAddress(formattedAddress);
  };

  const validateTime = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    if ((hour >= 6 && hour < 9) || (hour >= 18 && hour < 21)) {
      setStartTime(time);
    } else {
      alert('Service is available between 6 AM to 9 AM or 6 PM to 9 PM.');
    }
  };

  return (
    <div className="book-container">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft className="back-icon" />
        </button>
        <h2 className="checkout-title">Checkout</h2>
      </div>

      <div className="form-container">
        <h3 className="section-title">When do you want the service?</h3>

        <h4 className="input-label">Select Date</h4>
        <div className="input-group">
          <FaCalendarAlt className="input-icon" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-picker"
            placeholderText="Select a date"
            minDate={today}
          />
        </div>

        <h4 className="input-label">Select Time</h4>
        <div className="input-group">
          <FaClock className="input-icon" />
          <div className="time-picker-wrapper">
            <button
              onClick={() => setIsTimeOpen(true)}
              className="time-picker-button"
            >
              {startTime}
            </button>
            {isTimeOpen && (
              <div className="time-picker-container">
                <TimeKeeper
                  time={startTime}
                  onChange={(data) => validateTime(data.formatted24)}
                  switchToMinuteOnHourSelect={true}
                  onDoneClick={() => setIsTimeOpen(false)}
                />
              </div>
            )}
          </div>
        </div>

        <h3 className="section-title">Pick-up Address</h3>
        <div className="input-group">
          <FaMapMarkerAlt className="input-icon" />
          <Autocomplete
            apiKey="YOUR_GOOGLE_API_KEY"
            onPlaceSelected={handlePlaceSelected}
            className="address-input"
            placeholder="Enter pick-up address"
          />
        </div>

        <h4 className="input-label">Pick-up Address Type</h4>
        <div className="address-type-options">
          <label className="radio-option">
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={selectedAddressType === 'home'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="radio-input"
            />
            Home
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={selectedAddressType === 'work'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="radio-input"
            />
            Work
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="addressType"
              value="others"
              checked={selectedAddressType === 'others'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="radio-input"
            />
            Others
          </label>
        </div>
      </div>

      <button
        className="proceed-button"
        onClick={() => navigate('/payment')}
      >
        PROCEED
      </button>
    </div>
  );
};

export default Book;
