import '../styles/App.css';
import React from "react";
import AboutUs from '../components/AboutUs.js';
import WhatWeDo from '../components/WhatWeDo';
import MeetTheTeam from '../components/MeetTheTeam';

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
