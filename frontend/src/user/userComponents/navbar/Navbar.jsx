import React, { useState } from 'react';
import { FaHome, FaSuitcase, FaCogs, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ProfileDrawer from '../profileDrawer/ProfileDrawer';
import './Navbar.scss'; // Import the SCSS file

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? 'navbar-icon-active' : 'navbar-icon'
          }
        >
          <FaHome className="icon" size={24} />
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? 'navbar-icon-active' : 'navbar-icon'
          }
        >
          <FaSuitcase className="icon" size={24} />
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? 'navbar-icon-active' : 'navbar-icon'
          }
        >
          <FaCogs className="icon" size={24} />
        </NavLink>
        <div
          className="navbar-icon"
          onClick={toggleDrawer}
        >
          <FaUser className="icon" size={24} />
        </div>
      </nav>

      <ProfileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
