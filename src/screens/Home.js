import React from "react";
import AboutUs from '../components/Home/AboutUs.js';
import WhatWeDo from '../components/Home/WhatWeDo';
import MeetTheTeam from '../components/Home/MeetTheTeam';

function Home() {
  return (
    <div className="App">
      <AboutUs/>
      <WhatWeDo/>
      <MeetTheTeam/>
    </div>
  );
}

export default Home;
