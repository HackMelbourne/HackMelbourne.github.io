import '../styles/sponsor.css';
import React from "react";
import HackMelbourne_Prospectus from '../HackMelbourne_Prospectus.pdf';

function Sponsor() {
  return (
    <div className="sponsorUsContainer">
      <h1>Become a HackMelbourne Sponsor</h1>
      <p>Organising large scale, cross-university hackathons requires considerable effort and we couldn’t do it without your support! </p>
      <h3>What's in it for you?</h3>
      <p className="pushButtonDown">Marketing, promotion, invitation to our events and access to a talent pool of highly skilled software developers and programmers are just some of the reasons to support us.</p>
      <a className="highlight-button" href={HackMelbourne_Prospectus} download="HackMelbourne_Sponsorship_Prospectus.pdf"> Download sponsorship prospectus </a>
      <h3 className="pushButtonUp">Interested?</h3>
      <p>Email us at <u><a href="mailto:hackmelb.team@gmail.com">hackmelb.team@gmail.com</a></u></p>
    </div>
  );
}

export default Sponsor;
