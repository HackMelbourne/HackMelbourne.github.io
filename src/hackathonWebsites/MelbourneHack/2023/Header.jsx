import React from 'react';
import './header.css';
import logo from '/img/HackMelbourne2023_logo.png';

const Header = () => {
  return (
    <>
      <nav id="melbournehack2023-nav">
        <div className="logo">
          <img src={logo} alt="Logo" id="melbournehack2023-logo" />
        </div>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
