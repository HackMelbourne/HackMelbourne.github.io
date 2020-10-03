import '../styles/whatWeDo.css';
import React from "react";
import MainHackathon from '../img/MainHackathon.png';
import RookieHackathon from '../img/RookieHackathon.png';
import EducationProgram from '../img/EducationProgram.png';

function WhatWeDo() {
  return (
    <div className="whatWeDoContainer">
      <div className="homeContent">
        <h1>What we are doing</h1>
        <div className="whatWeDoPrograms">
          <div className="program">
            <img className="programImg"src={MainHackathon}></img>
            <p>HackMelbourne Hackathon</p>
          </div>
          <div className="program">
            <img className="programImg" src={RookieHackathon}></img>
            <p>Rookie Hackathon</p>
          </div>
          <div className="program">
            <img className="programImg" src={EducationProgram}></img>
            <p>Education Program</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;