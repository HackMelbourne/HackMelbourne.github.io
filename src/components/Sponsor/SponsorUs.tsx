import React from 'react';
import hackmelb_team from '/img/hackmelb_team1.jpg';
import HackMelbourne_Prospectus from '/documents/HackMelbourne_2023_Prospectus.pdf';
import { SPONSORSHIP_EMAIL } from '../../constants';

function SponsorUs() {
  return (
    <div className="sponsorUsContainer">
      <h1>Become a HackMelbourne Sponsor</h1>
      <p>
        Organising large scale, cross-university hackathons requires considerable effort and we couldn’t do it without
        your support!{' '}
      </p>
      <img src={hackmelb_team} className="teamPhoto" alt="team" />
      <h3>What's in it for you?</h3>
      <p className="pushButtonDown">
        Marketing, promotion, invitation to our events and access to a talent pool of highly skilled software developers
        and programmers are just some of the reasons to support us.
      </p>
      <a
        className="highlight-button"
        href={HackMelbourne_Prospectus}
        download="HackMelbourne_Sponsorship_Prospectus.pdf">
        Download sponsorship prospectus
      </a>
      <p>
        Email us at :
        <u>
          <a href={`mailto:${SPONSORSHIP_EMAIL}`}>{SPONSORSHIP_EMAIL}</a>
        </u>
      </p>
    </div>
  );
}

export default SponsorUs;
