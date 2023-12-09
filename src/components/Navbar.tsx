import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import HM_White_Transparent from '/img/HM_White_Transparent.png';
import { Link } from 'react-router-dom';

const ShowPopup = () => {
  document.getElementById('popup')?.classList.toggle('hidden');
};

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-full max-w-[800px] fixed pt-8 z-40 px-8">
        <div className="max-w-[800px] grow rounded-md bg-white/20 backdrop-blur-md border flex justify-between items-center px-5 py-3">
          <Link to="/" className="flex items-center justify-start gap-2 font-bold">
            <img src={HM_White_Transparent} className="h-8 w-8"></img>
            HackMelbourne
          </Link>
          <button className=" md:hidden" onClick={ShowPopup}>
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
      <nav
        id="popup"
        className="hidden flex w-screen h-screen p-2.5 z-50 justify-center items-center fixed bg-neutral-950">
        <div className="flex flex-col min-w-[350px] w-full mx-2.5 justify-between items-center self-stretch rounded-xl border-2 border-white">
          <div className="flex flex-col min-h-[350px] h-5/6 justify-center items-center gap-5">
            <img src={HM_White_Transparent} className="h-20 w-20" />
            <Link to="/" className="text-[32px] font-bold">
              Home
            </Link>
            <Link to="/index" className="text-[32px] font-bold">
              About us
            </Link>
            <Link to="/index" className="text-[32px] font-bold">
              Events
            </Link>
            <Link to="/index" className="text-[32px] font-bold">
              Sponsors
            </Link>
          </div>
          <div className="flex w-10 pt-5 pb-10 justify-between items-center">
            <button className="text-xl font-medium underline" onClick={ShowPopup}>
              Back
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
