import React from 'react';

const Text = () => {
  const subHeaderStyle = { fontWeight: '700', fontSize: '5rem' };
  const blurbTextStyle = { fontWeight: '100', fontSize: '1rem' };
  return (
    <div>
      <div style={subHeaderStyle}>Make the Change.</div>
      <div style={blurbTextStyle}>
        HackMelbourne, is hosting a hackathon event for university students of any field, centered around
        sustainability. This event presents a unique opportunity for students to make a change by showcasing their
        skills and creativity to develop innovative solutions to address pressing global issues. Alongside collaborating
        with like-minded individuals, mentors, and industry experts, students can participate in workshops, enjoy free
        food and snacks.
      </div>
    </div>
  );
};

export default Text;
