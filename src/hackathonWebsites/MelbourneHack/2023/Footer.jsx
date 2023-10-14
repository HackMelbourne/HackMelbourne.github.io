import React from 'react';
import "./footer.css";
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin, FaBars } from 'react-icons/fa';
import { DISCORD_LINK, FACEBOOK_LINK, LINKEDIN_LINK, SPONSORSHIP_EMAIL } from '../../../constants';
import Logo from '/img/H{Logo.png';


export function Footer() {
  return (
    <footer>
        <div className='FootLogoDiv'>
            <a className = "FooterLogo" href="/">
                <img href="/" src={Logo} alt="Logo" className="logoMobile" />
            </a>
            <span className="FooterText">Melbourne Hack 2023</span>
        </div>
       

        <div className="FootIconLinks">
            <li>
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaDiscord />
                </a>
            </li>

            <li>
                <a href={`mailto:${SPONSORSHIP_EMAIL}`} className="icon">
                <FaEnvelope />
                </a>
            </li>

            <li>
                <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin />
                </a>
            </li>

            <li className='lastIcon'>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaFacebook />
                </a>
            </li>
            
            
        </div>
    </footer>
  );
}