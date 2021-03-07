import '../../styles/whatWeDo.css';
import React from "react";
import MainHackathon from '../../img/MainHackathon.png';
import RookieHackathon from '../../img/RookieHackathon.png';
import EducationProgram from '../../img/EducationProgram.png';

function WhatWeDo() {
  return (
    <div className="whatWeDoContainer">
      <div className="homeContent">
        <h1 className="initiativeheader">
          <a href="/initiatives">
            Our Initiatives
          </a>
        </h1>
        <div className="whatWeDoPrograms">
          <a className="program" href="/initiatives#melbourne-hack">
            <img className="programImg"src={MainHackathon}></img>
            <p className="programTitle">Melbourne Hack</p>
            <p>Melbourne Hackathon</p>
          </a>
          <a className="program" href="https://hackiethon.hackmelb.org/">
            <img className="programImg" src={RookieHackathon}></img>
            <p className="programTitle">Hackiethon</p>
            <p>Virtual Rookie Hackathon</p>
          </a>
          <a className="program" href="/initiatives#decoded">
            <img className="programImg" src={EducationProgram}></img>
            <p className="programTitle">DecodED</p>
            <p>Education Program</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;