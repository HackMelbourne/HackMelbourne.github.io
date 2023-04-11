import React from 'react';
import "./footer.css";
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin, FaBars } from 'react-icons/fa';
import { DISCORD_LINK, FACEBOOK_LINK, LINKEDIN_LINK, SPONSORSHIP_EMAIL } from '../../../constants';


export function Footer() {
  return (
    <footer>
        <div className='FootLogo'>
            <p>Melbourne Hack 2023</p>
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

            <li>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                <FaFacebook />
                </a>
            </li>
            
            
        </div>
    </footer>
  );
}