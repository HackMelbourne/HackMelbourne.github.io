import React from 'react';
import '../styles/navbar.css';
import Logo from '../img/H{Logo.png';
import Hamburger from '../img/hamburger.png'

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
            <a href="/">
              <img src={Logo} alt="Logo"></img>
            </a>
        </div>
        <nav className="navigation">
            <ul>
                <li><a></a></li>
                <li><a href="/initiatives">Initiatives</a></li>
                <li><a href="/sponsors">Sponsor Us</a></li>
                <li><a class="signup-button" target="_blank" href="https://forms.gle/yBCTHgWdBj66JhUV6">Sign Up</a></li>
            </ul>
        </nav>
    </header>
  )
};
export default Navbar;