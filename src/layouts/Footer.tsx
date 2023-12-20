import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface FooterLink {
  name: string;
  link: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterIcon {
  name: string;
  icon: IconType;
  link: string;
}

interface FooterData {
  links: FooterSection[];
  icons: FooterIcon[];
}

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
