import React from 'react';
import '../styles/navbar.css';
import Logo from '../img/H{Logo.png';
import Hamburger from '../img/hamburger.png'
import {FaDiscord, FaEnvelope, FaFacebook, FaLinkedin} from "react-icons/fa";

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
              <img href="/" src={Logo} alt="Logo"></img>
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

            <ul class="dropdown">
                <li>
                    <a href="https://discord.gg/tEQ5m6ayTV" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaDiscord style={{fill: 'black'}}/>
                    </a></li>
                <li><a href="https://www.facebook.com/hackmelbourne" target="_blank" rel="noopener noreferrer"
                       className="icon"><FaFacebook style={{fill: 'black'}}/></a></li>
                <li><a href="https://www.linkedin.com/company/hackmelbourne/" target="_blank" rel="noopener noreferrer"
                       className="icon"><FaLinkedin style={{fill: 'black'}}/></a></li>
                <li><a href="mailto:hackmelb.team@gmail.com" className="icon"><FaEnvelope style={{fill: 'black'}}/></a>
                </li>
                <li class="screen"><a href="/initiatives">Initiatives</a></li>
                <li class="screen">
                    <a href="/sponsors">Sponsors</a>
                    <ul class="dropdown-content">
                        <li><a href="/sponsor_us">Sponsor Us</a></li>
                    </ul>
                </li>

                {/* <li class="screen"><a class="signup-button" target="_blank" href="https://hmmembership.getqpay.com">Sign Up</a></li> */}
            </ul>
        </nav>
    </header>
  )
};
export default Navbar;