import '../styles/initiatives.css';
import React from "react";
import mainHackathon from '../img/MainHackathon.png';
import rookieHackathon from '../img/RookieHackathon.png';
import educationProgram from '../img/EducationProgram.png';

function Initiatives() {
  return (
    <div>
      <header>
        <h1>Our Club Initiatives</h1>
      </header>
      <div className="greyBackground">
        <div className="text">
          <h2>Main Hackathon</h2>
          <p>The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 2, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!</p>
        </div>
        <div className="image">
          <img src={mainHackathon} style={{height: "300px", width: "300px"}} alt="Hackathon Symbol"/>
        </div>
      </div>
      <div className="blackBackground">
        <div className="image">
          <img src={rookieHackathon} style={{height: "300px", width: "300px"}} alt="Hackathon Symbol"/>
        </div>
        <div className="text">
          <h2>Rookie Hackathon</h2>
          <p>Our rookie hackathon is tailor-made for those who little experience in hackathons, but are keen to get involved! Unlike our main hackathon, this will be held virtually and will provide valuable insights into the experience of competing in such events, and how to maximise your chances of success.  </p>
        </div>
      </div>
      <div className="greyBackground">
        <div className="text">
          <h2>Education Program</h2>
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
