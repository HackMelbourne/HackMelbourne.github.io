import React from "react";
import AboutUs from '../components/Home/AboutUs.js';
import WhatWeDo from '../components/Home/WhatWeDo';
import MeetTheTeam from '../components/Home/MeetTheTeam';

import HackiethonModal from '../components/EventsModal/HackiethonModal';

function Home() {
  return (
    <div className="App">
      <HackiethonModal/>
      <AboutUs/>
      <WhatWeDo/>
      <MeetTheTeam/>
    </div>
  );
}

export default Home;
