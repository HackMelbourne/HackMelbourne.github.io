import React from 'react';
import '../styles/footer.css';
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { DISCORD_LINK, FACEBOOK_LINK, LINKEDIN_LINK, SPONSORSHIP_EMAIL } from '../constants';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="icon">
          <FaDiscord />
        </a>
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="icon">
          <FaFacebook />
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin />
        </a>
        <a href={`mailto:${SPONSORSHIP_EMAIL}`} className="icon">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
