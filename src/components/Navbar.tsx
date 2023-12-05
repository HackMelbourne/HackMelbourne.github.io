import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import HM_White_Transparent from '/img/HM_White_Transparent.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-full max-w-[800px] fixed pt-8 z-30">
        <div className="max-w-[800px] grow rounded-md bg-white/20 backdrop-blur-md border flex justify-between items-center px-5 py-3">
          <Link to="/" className="flex items-center justify-start gap-2 font-bold">
            <img src={HM_White_Transparent} className="h-8 w-8"></img>
            HackMelbourne
          </Link>
          <button className=" md:hidden">
            <MenuIcon />
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-end gap-6 items-center">
            <Link to="/index">About us</Link>
            <Link to="/index">Events</Link>
            <Link to="/index">Sponsors</Link>
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <nav className="flex w-screen h-screen z-50 p-2.5 justify-center items-center fixed">
        <div className="flex flex-col min-w-[350px] w-[97%] justify-between items-center self-stretch rounded-xl border-2 border-[#3580C5]">
          
          <div className="flex flex-col min-h-[450px] justify-center items-center gap-5">
            <img src={HM_White_Transparent} className="h-20 w-20"/>
            <Link 
              to="/index"
              className="text-[32px] font-bold">
              Home
            </Link>
            <Link
              to="/index"
              className="text-[32px] font-bold">
              About us
            </Link>
            <Link
              to="/index"
              className="text-[32px] font-bold">
              Events
            </Link>
            <Link
              to="/index"
              className="text-[32px] font-bold">
              Sponsors
            </Link>
          </div>
          <div className="flex w-10 pt-5 pb-10 justify-between items-center">
            <button className="text-xl font-medium underline">Back</button>
          </div>
        
        </div>
      </nav>
    
    </div>
  );
};
export default Navbar;
