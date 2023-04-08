import React, { useEffect } from 'react';
import Header from './Header';
import Text from './Text';
import './index.css';
import newIcon from '/three_boxs.ico';
import useFavicon from '../../../hooks/useFavicon.js';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Globe } from './Globe';
import './globe.css';
import './stars.css';

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
    height: '50vh',
  };
  const TextStyle = {
    ...itemStyle,
    paddingLeft: '1rem',
  };

  return (
    <div id="melbournehack2023">
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>

      <Header />
      <div className="globeAndTextContainer">
        <div style={GlobeStyle}>
          <Canvas>
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
          </Canvas>
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
