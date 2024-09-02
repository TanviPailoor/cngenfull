import React from 'react';
import './Header.scss';
import logo from '../../../assets/images/logo.png';
import { GoBellFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <section className="header-container">
        <section className="header-inner">
          <img src={logo} alt="logo" />
          <Link to="/notification">
            <GoBellFill className="bell-icon" />
          </Link>
        </section>
      </section>
    </>
  );
};

export default Header;
