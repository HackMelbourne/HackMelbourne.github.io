import React from 'react';
import AboutUs from '../components/Home/AboutUs';
import WhatWeDo from '../components/Home/WhatWeDo';
import MeetTheTeam from '../components/Home/MeetTheTeam';
import DescriptionBoxes from '../components/Home/DescriptionBoxes';

function Root() {
  return (
    <div className="App">
      <AboutUs />
      <WhatWeDo />
      <DescriptionBoxes />
      <MeetTheTeam />
    </div>
  );
}

export default Root;
