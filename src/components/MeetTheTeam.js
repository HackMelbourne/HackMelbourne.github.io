import '../styles/meetTheTeam.css';
import React from "react";
import ali from "../img/team/hm-ali.jpg";
import ankita from "../img/team/hm-ankita.png";
import chris from "../img/team/hm-chris.jpg";
import elaine from "../img/team/hm-elaine.jpg";
import fiona from "../img/team/hm-fiona.jpg";
import jeeng from "../img/team/hm-jeeng.png";
import jenny from "../img/team/hm-jenny.jpg";
import joanne from "../img/team/hm-joanne.jpg";
import kye from "../img/team/hm-kye.jpg";
import matthew from "../img/team/hm-matthew.jpg";
import ryan from "../img/team/hm-ryan.png";
import serena from "../img/team/hm-serena.jpg";
import victoria from "../img/team/hm-victoria.jpg";

function MeetTheTeam() {
  return (
    <div>
      <div className="meetTheTeamContainer">
        <h1 className="meetTheTeamTitle">Meet the team</h1>
        <div className="teamPhotos">
          <div>
            <img className="profile" src={ali}></img>
            <p>Ali</p>
          </div>
          <div>
            <img className="profile" src={ankita}></img>
            <p>Ankita</p>
          </div>
          <div>
            <img className="profile" src={chris}></img>
            <p>Christopher</p>
          </div>
          <div>
            <img className="profile" src={elaine}></img>
            <p>Elaine</p>
          </div>
          <div>
            <img className="profile" src={fiona}></img>
            <p>Fiona</p>
          </div>
          <div>
            <img className="profile" src={jeeng}></img>
            <p>Jeeng</p>
          </div>
          <div>
            <img className="profile" src={jenny}></img>
            <p>Jenny</p>
          </div>
          <div>
            <img className="profile" src={joanne}></img>
            <p>Joanne</p>
          </div>
          <div>
            <img className="profile" src={kye}></img>
            <p>Kye-Ann</p>
          </div>
          <div>
            <img className="profile" src={matthew}></img>
            <p>Matthew</p>
          </div>
          <div>
            <img className="profile" src={ryan}></img>
            <p>Ryan</p>
          </div>
          <div>
            <img className="profile" src={serena}></img>
            <p>Serena</p>
          </div>
          <div>
            <img className="profile" src={victoria}></img>
            <p>Victoria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;