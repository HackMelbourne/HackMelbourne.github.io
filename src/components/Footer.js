import React from 'react';
import '../styles/footer.css';
import facebook from '../img/footerFacebook.png';
import linkedin from '../img/footerLinkedIn.png';
import email from '../img/footerEmail.png';

const Footer=() => {
  return (
    <footer>
        <div>
            <a href="https://www.facebook.com/hackmelbourne" target="_blank"><img src={facebook} alt="facebook icon"/></a>
            <a href="https://www.linkedin.com/company/hackmelbourne/" target="_blank"><img src={linkedin} alt="linkedin icon"/></a>
            <a href="mailto:hackmelb.team@gmail.com"><img src={email} alt="email icon"/></a>
        </div>
    </footer>
  )
};
export default Footer;