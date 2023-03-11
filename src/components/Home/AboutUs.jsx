import React from 'react';
import '../../styles/aboutUs.css';
import laptop from '/img/laptop.png';

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsContent">
        <div className="aboutUs">
          <div>
            <div>
              <h1>About HackMelbourne.</h1>
              <p>
                We are a student organisation based in Melbourne dedicated to providing students from all backgrounds
                and experiences with a platform to develop and apply technical skills, specifically in a hackathon
                context.
                <br />
                <br />
                We're passionate about increasing student accessibility to opportunities within the technological
                sphere, fostering a love for software development and channeling innovation through our hackathons.
                <br />
                <br />
                Students from all universities and schools are welcome to participate in our programs.
              </p>
            </div>
          </div>
        </div>
        <div className="laptopImage">
          <img className="laptop" src={laptop} alt="Laptop" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
