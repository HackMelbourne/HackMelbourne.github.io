import '../../styles/sponsors.css';
import React from "react";

import bain_logo from '../../img/sponsors/bain/bain_logo.png';
import bain_logo_inv from '../../img/sponsors/bain/bain_logo_inv.png';

import optiver_logo from '../../img/sponsors/optiver/optiver_logo.png'



function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <h1 className="sponsHeading">
        Meet Our Sponsors
      </h1>
        <div className="diamondSponsor">
          <h1>
            Diamond Tier
          </h1>
          <table className="sponsorTable"> 
            <tr>
              <PlaceHolder tier="Diamond"/>
            </tr>
          </table>

        </div>
        <div className="platinumSponsor">
          <h1>
            Platinum Tier
          </h1>
          <table className="sponsorTable"> 
            <tr>
              <PlaceHolder tier="Platinum"/>
            </tr>
          </table>

        </div>
        <div className="goldSponsor">
          <h1>
            Gold Tier
          </h1>
          <table className="sponsorTable"> 
              <tr>
                <SponsorD link="" logo={optiver_logo} sponsorName={"Optiver"} alt="optiver"/>
              </tr>
          </table>
          
        </div>
        <div className="silverSponsor">
          <h1>
            Silver Tier
          </h1>
          <table className="sponsorTable">
            <tr>
              <SponsorD link="" logo={bain_logo} sponsorName={"Bain & Co."} alt="bainandco"/>
              <SponsorD link="" logo={bain_logo} sponsorName={"Bain & Co."} alt="bainandco"/>
            </tr>
          </table>

        </div>
    </div>
  );
}




function SponsorD(props) {
  return (
    <td>
      <a href={props.link}>
        <img className="sponsLogo" src={props.logo}></img>
        <p className="sponsName">{props.sponsorName}</p>
      </a>
    </td>
  )
}


function PlaceHolder(props) {
  return (
    <td>
      <h2 className="placeHolder">
        Be the first {props.tier} tier sponsor!
      </h2>
    </td>
  )
}

export default Sponsors;
