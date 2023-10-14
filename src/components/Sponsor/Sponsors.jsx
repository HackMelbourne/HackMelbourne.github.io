import '../../styles/sponsors.css';
import React from 'react';

// Diamond
import redmarble_logo from '/img/sponsors/RedMarble/Red_Marble.png';
// import arcitecta_logo from '/img/sponsors/Arcitecta/arcitecta_logo.png';
// import tibra_logo from '/img/sponsors/Tibra/tibra_logo.png';
import integradev_logo from '/img/sponsors/IntegraDev/integra_dev_logo.png';

// Gold
import optiver_logo from '/img/sponsors/Optiver/optiver_logo.png';

// Silver
import bain_logo from '/img/sponsors/Bain/bain_logo.png';
// import csiro_logo from '/img/sponsors/CSIRO/CSIRO_logo_black.png';

function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <h1 className="sponsHeading">HackMelbourne 2022 Sponsors</h1>
      <div className="diamondSponsor">
        <h1>Diamond Sponsors</h1>
        <div className="sponsorSection">
          <SponsorD link="https://redmarble.ai/" logo={redmarble_logo} sponsorName={'Red Marble'} alt="redmarble" />
          <SponsorD
            link="https://www.integradev.com.au/"
            logo={integradev_logo}
            sponsorName={'IntegraDev'}
            alt="integradev"
          />
        </div>
      </div>
      <div className="separator" />
      <div className="platinumSponsor">
        <h1>Platinum Sponsors</h1>
        <div className="sponsorSection">
          <SponsorD link="https://www.optiver.com/" logo={optiver_logo} sponsorName={'Optiver'} alt="optiver" />
        </div>
      </div>
      <div className="separator" />
      <div className="goldSponsor">
        <h1>Gold Sponsors</h1>
        <div className="sponsorSection">
          <SponsorD link="https://www.bain.com/" logo={bain_logo} sponsorName={'Bain & Co.'} alt="bainandco" />
        </div>
      </div>
      <div className="separator" />
      <div className="silverSponsor">
        <h1>Silver Sponsors</h1>
        <div className="sponsorSection">
          <PlaceHolder tier="Silver" />
          {/* <SponsorD link="https://www.csiro.au/en/" logo={csiro_logo} sponsorName={"CSIRO"} alt="csiro"/> */}
        </div>
      </div>
    </div>
  );
}

function SponsorD(props) {
  return (
    <a href={props.link}>
      <img className="sponsLogo" src={props.logo} alt="logo"></img>
      <p className="sponsName">{props.sponsorName}</p>
    </a>
  );
}

function PlaceHolder(props) {
  return (
    <a href="/sponsor_us">
      <h2 className="placeHolder">Be the first {props.tier} tier sponsor!</h2>
    </a>
  );
}

export default Sponsors;
