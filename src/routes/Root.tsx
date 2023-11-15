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
      <DescriptionBoxes events={[{
      title: 'First Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Second Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Third Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }]} /> 
      <MeetTheTeam />
    </div>
  );
}

export default Root;
