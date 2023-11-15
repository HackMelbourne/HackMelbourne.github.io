import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/gradients.css';

const Navbar = () => {
  return (
    <nav className="w-screen max-w-full flex justify-center fixed px-8 pt-8">
      <div className="grow rounded-md bg-white/20 backdrop-blur-sm gradient-border flex p-2">
        <div>HackMelbourne</div>
        <div>Settings</div>
      </div>
    </nav>
  );
};
export default Navbar;
