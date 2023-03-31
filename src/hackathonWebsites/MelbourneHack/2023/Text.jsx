import React from 'react';
import './text.css';

const Text = () => {
  return (
    <div className="textContainer">
      <div className="subHeader">Make the Change.</div>
      <div className="blurbText">
        HackMelbourne, is hosting a hackathon event for university students of any field, centered around
        sustainability. This event presents a unique opportunity for students to make a change by showcasing their
        skills and creativity to develop innovative solutions to address pressing global issues. Alongside collaborating
        with like-minded individuals, mentors, and industry experts, students can participate in workshops, enjoy free
        food and snacks.
      </div>
      <button>Join Now!</button>
    </div>
  );
};

export default Text;
