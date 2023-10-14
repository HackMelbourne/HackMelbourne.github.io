import React from 'react';
import '../styles/navbar.css';
import Logo from '/img/H{Logo.png';
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin, FaBars } from 'react-icons/fa';
import { DISCORD_LINK, FACEBOOK_LINK, LINKEDIN_LINK, SPONSORSHIP_EMAIL } from '../constants';
import { Link } from 'react-router-dom';

function expand() {
  var x = document.getElementById('topnav');
  var y = document.getElementsByClassName('signup-button');
  if (x.className === 'navigation') {
    x.className += ' responsive';
    if (y.length > 0) {
      y[0].className = '';
    }
  } else {
    x.className = 'navigation';
  }
}

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="mobileWrapper">
        <FaBars onClick={expand} className="hamburger" />
        <a className="mobileHeader" href="/">
          <img href="/" src={Logo} alt="Logo" className="logoMobile" />
          HackMelbourne
        </a>
      </div>
      <nav className="navigation" id="topnav">
        <a href="/" className="logo">
          <img href="/" src={Logo} alt="Logo" />
        </a>
        <ul className="dropdown">
          <div className="navIconLinks">
            <li>
              <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href={`mailto:${SPONSORSHIP_EMAIL}`} className="icon">
                <FaEnvelope />
              </a>
            </li>
          </div>

          <li className="screen">
            <Link to="/initiatives">Initiatives</Link>
          </li>
          <li className="screen">
            <Link to="/sponsors">Sponsors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
