import '../styles/meetTheTeam.css';
import React from "react";
import chris from "../img/team/hm-chris.jpg";
import fiona from "../img/team/hm-fiona.jpg";
import jeeng from "../img/team/hm-jeeng.png";
import jenny from "../img/team/hm-jenny.jpg";
import joanne from "../img/team/hm-joanne.jpg";
import kye from "../img/team/hm-kye.jpg";
import ryan from "../img/team/hm-ryan.png";
import serena from "../img/team/hm-serena.jpg";
import victoria from "../img/team/hm-victoria.jpg";

function MeetTheTeam() {
  return (
    <div>
      <div className="meetTheTeamContainer">
        <h1 className="meetTheTeamTitle">Meet the team</h1>
        <div className="teamPhotos">
          <img className="profile" src={chris}></img>
          <img className="profile" src={fiona}></img>
          <img className="profile" src={jeeng}></img>
          <img className="profile" src={jenny}></img>
          <img className="profile" src={joanne}></img>
          <img className="profile" src={kye}></img>
          <img className="profile" src={ryan}></img>
          <img className="profile" src={serena}></img>
          <img className="profile" src={victoria}></img>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;