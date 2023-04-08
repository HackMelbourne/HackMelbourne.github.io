import React, { useEffect } from 'react';
import Globe from './Globe';
import Header from './Header';
import Text from './Text';
import './index.css';
import newIcon from '/three_boxs.ico';
import useFavicon from '../../../hooks/useFavicon.js';

const MelbourneHack2023 = () => {
  // Set the favicon
  useFavicon(newIcon);
  useEffect(() => {
    // Set Body Background Color to #0b0e10
    document.body.style.backgroundColor = '#0b0e10';
  }, []);

  // Set flex-basis to 50% for both items
  const itemStyle = {
    flexBasis: '50%',
    boxSizing: 'border-box',
  };

  // Style the Globe and Text components
  const GlobeStyle = {
    ...itemStyle,
    paddingRight: '1rem',
  };
  const TextStyle = {
    ...itemStyle,
    paddingLeft: '1rem',
  };

  return (
    <div id="melbourne-hack-2023">
      MelbourneHack2023
      <Header />
      <div className="globeAndTextContainer">
        <div style={GlobeStyle}>
          <Globe />
        </div>
        <div style={TextStyle}>
          <Text />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MelbourneHack2023;
