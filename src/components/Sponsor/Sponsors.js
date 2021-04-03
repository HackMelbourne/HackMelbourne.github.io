import '../../styles/sponsors.css';
import React from "react";

import bain_logo from '../../img/sponsors/bain/bain_logo.png';
import bain_logo_inv from '../../img/sponsors/bain/bain_logo_inv.png';

import optiver_logo from '../../img/sponsors/optiver/optiver_logo.png'
import arcitecta_logo from '../../img/sponsors/arcitecta/arcitecta_logo.png'
import tibra_logo from '../../img/sponsors/tibra/tibra_logo.png'

function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <h1 className="sponsHeading">
        HackMelbourne 2021 Sponsors
      </h1>
        <div className="diamondSponsor">
          <h1>
            Diamond Sponsors
          </h1>
          <table className="sponsorTable"> 
            <tr>
              <SponsorD link="https://www.arcitecta.com/" logo={arcitecta_logo} sponsorName={"Arcitecta"} alt="arcitecta"/>
              <SponsorD link="https://www.tibra.com/" logo={tibra_logo} sponsorName={"Tibra"} alt="tibra"/>
            </tr>
          </table>

        </div>
        <div class="separator"/>
        <div className="platinumSponsor">
          <h1>
            Platinum Sponsors
          </h1>
          <table className="sponsorTable"> 
            <tr>
              <PlaceHolder tier="Platinum"/>
            </tr>
          </table>

        </div>
        <div class="separator"/>
        <div className="goldSponsor">
          <h1>
            Gold Sponsors
          </h1>
          <table className="sponsorTable"> 
              <tr>
                <SponsorD link="https://www.optiver.com/" logo={optiver_logo} sponsorName={"Optiver"} alt="optiver"/>
              </tr>
          </table>
        
        </div>
        <div class="separator"/>
        <div className="silverSponsor">
          <h1>
            Silver Sponsors
          </h1>
          <table className="sponsorTable">
            <tr>
              <SponsorD link="https://www.bain.com/" logo={bain_logo} sponsorName={"Bain & Co."} alt="bainandco"/>
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
      <a href="/sponsor_us">
        <h2 className="placeHolder">
          Be the first {props.tier} tier sponsor!
        </h2>
      </a>
      
    </td>
  )
}

export default Sponsors;
