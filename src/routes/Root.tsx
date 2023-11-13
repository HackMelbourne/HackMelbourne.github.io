import React from 'react';
import AboutUs from '../components/Home/AboutUs';
import WhatWeDo from '../components/Home/WhatWeDo';
import MeetTheTeam from '../components/Home/MeetTheTeam';

function Root() {
  return (
    <div className="App">
      <AboutUs />
      <WhatWeDo />
      <MeetTheTeam />
    </div>
  );
}

export default Root;
