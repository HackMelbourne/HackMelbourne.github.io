import React from 'react';
import Sponsors from '../components/Sponsor/Sponsors';
import SponsorUs from '../components/Sponsor/SponsorUs';

function Sponsor() {
  return (
    <div className="sponsorsContainer App">
      <Sponsors />
      <hr></hr>
      <SponsorUs />
    </div>
  );
}

export default Sponsor;
