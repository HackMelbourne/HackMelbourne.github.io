import '../styles/App.css';
import React from "react";
import Challenge5 from '../Challenge5.pdf';

function Sponser() {
  return (
    <div className="App">
      { <header className="App-header">
        Sponser Us Page
      </header> }
      <a href={Challenge5} download="HackMelbourne_Sponsorship_Prospectus.pdf"> Download sponsorship prospectus </a>
    </div>
  );
}

export default Sponser;
