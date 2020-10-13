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
            <p>Ali Muhammad</p>
          </div>
          <div>
            <img className="profile" src={ankita}></img>
            <p>Ankita Dhar</p>
          </div>
          <div>
            <img className="profile" src={chris}></img>
            <p>Christopher Lee</p>
          </div>
          <div>
            <img className="profile" src={elaine}></img>
            <p>Elaine Huynh</p>
          </div>
          <div>
            <img className="profile" src={fiona}></img>
            <p>Fiona Zhu</p>
          </div>
          <div>
            <img className="profile" src={jeeng}></img>
            <p>Jeeng Hao Low</p>
          </div>
          <div>
            <img className="profile" src={jenny}></img>
            <p>Jenny Wang</p>
          </div>
          <div>
            <img className="profile" src={joanne}></img>
            <p>Joanne Ng</p>
          </div>
          <div>
            <img className="profile" src={kye}></img>
            <p>Kye-Ann Chong</p>
          </div>
          <div>
            <img className="profile" src={matthew}></img>
            <p>Matthew Kwon</p>
          </div>
          <div>
            <img className="profile" src={ryan}></img>
            <p>Ryan Tan</p>
          </div>
          <div>
            <img className="profile" src={serena}></img>
            <p>Serena Wang</p>
          </div>
          <div>
            <img className="profile" src={victoria}></img>
            <p>Victoria Mok</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;