import React from "react";
import AboutUs from '../components/AboutUs.js';
import WhatWeDo from '../components/WhatWeDo';
import MeetTheTeam from '../components/MeetTheTeam';

function Home() {
  return (
    <div className="App">
      <AboutUs/>
      <WhatWeDo/>
    </div>
  );
}

export default Home;
