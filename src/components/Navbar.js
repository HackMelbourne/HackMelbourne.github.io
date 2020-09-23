import React from 'react';
import '../styles/navbar.css';
import Logo from '../img/H{Logo.png'

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
                <li><a href="/initiatives">Initatives</a></li>
                <li><a href="/sponsors">Sponsor Us</a></li>
                <li><a class="highlight-button" href="#">Sign Up</a></li>
            </ul>
        </nav>
    </header>
  )
};
export default Navbar;