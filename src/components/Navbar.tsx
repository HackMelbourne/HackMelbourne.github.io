import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/gradients.css';

// Images
import HM_White_Transparent from '/img/HM_White_Transparent.png';

const Navbar = () => {
  return (
    <nav className="w-screen max-w-full flex justify-center fixed px-8 pt-8">
      <div className="grow rounded-md bg-white/20 backdrop-blur-sm gradient-border flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <img src={HM_White_Transparent} className="h-12 w-12"></img>
          HackMelbourne
        </div>
        <div>Settings</div>
      </div>
    </nav>
  );
};
export default Navbar;
