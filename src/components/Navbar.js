import React from 'react';
import '../styles/navbar.css';
import Logo from '../img/H{Logo.png';
import Hamburger from '../img/hamburger.png'

function expand() {
  var x = document.getElementById("topnav");
  var y = document.getElementsByClassName("signup-button");
  if (x.className === "navigation") {
    x.className += " responsive";
    if (y.length > 0){
      y[0].className = "";
    }
  } else {
    x.className = "navigation";
  }
}

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
            <a href="/">
              <img src={Logo} alt="Logo"></img>
            </a>
        </div>
        <div class="mobileWrapper">
          <div class="hamburger" onClick={expand}>
            <img src={Hamburger}></img>
          </div>
          <a class="mobileHeader" href="/">HackMelbourne</a>
          <div class="mlh-banner">
            <img src={Hamburger}></img>
          </div>
        </div>
        <nav className="navigation" id="topnav">
            <ul>
                <li><a href="/initiatives">Initiatives</a></li>
                <li><a href="/sponsors">Sponsor Us</a></li>
                <li><a class="signup-button" target="_blank" href="https://hmmembership.getqpay.com">Sign Up</a></li>
            </ul>
        </nav>
    </header>
  )
};
export default Navbar;