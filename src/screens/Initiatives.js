import '../styles/initiatives.css';
import React from "react";
import mainHackathon from '../img/MainHackathon.png';
import rookieHackathon from '../img/RookieHackathon.png';
import educationProgram from '../img/EducationProgram.png';

function Initiatives() {
  return (
    <div>
      <header>
      </header>
      <div className="greyBackground" id="melbourne-hack">
        <div className="text">
          <h2>Melbourne Hack</h2>
          <h4>July, 2021</h4>
          <p className="marginBelow">The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 2, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!</p>
          <a className="to-fb-button" target="_blank" href="https://www.facebook.com/hackmelbourne">Follow updates</a>
        </div>
        <div className="image">
            <img src={mainHackathon} style={{height: "300px", width: "300px"}} alt="Hackathon Symbol"/>
        </div>
      </div>
      <div className="blackBackground" id="hackiethon">
        <div className="image">
          <img src={rookieHackathon} style={{height: "300px", width: "300px"}} alt="Hackathon Symbol"/>
        </div>
        <div className="text">
          <h2>Hackiethon</h2>
          <h4>April, 2021</h4>
          <p className="marginBelow">Our rookie hackathon is tailor-made for those who little experience in hackathons, but are keen to get involved! Unlike our main hackathon, this will be held virtually and will provide valuable insights into the experience of competing in such events, and how to maximise your chances of success.  </p>
          <a className="to-hackiethon-button" target="_blank" href="https://hackiethon.hackmelb.org">Hackiethon Website</a>
        </div>
      </div>
      <div className="greyBackground" id="decoded">
        <div className="text">
          <h2>DecodED</h2>
          <h4>March, 2021 - April, 2021</h4>
          <p>Our engaging education program is a 4-6 week course perfect for those with little to no experience in software development. Commencing in Semester 1 2021, the program will cover a variety of technologies that will exponentially improve your programming capabilities. With the rookie hackathon strategically scheduled at the conclusion of the program, you’ll have the chance to put your new-found skills to the test and experience the excitement of a hackathon.</p>
        </div>
        <div className="image">
          <img src={educationProgram} style={{height: "300px", width: "300px"}} alt="Hackathon Symbol"/>
        </div>
      </div>
    </div>
  );
}

export default Initiatives;
