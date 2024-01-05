import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import close_button from '/img/close-button.png';
import { Link } from 'react-router-dom';

interface Nav {
  clubname: string;
  logo: string;
  pages: string[];
  links: string[];
}

const ShowPopup = () => {
  document.getElementById('popup')?.classList.toggle('hidden');
};

const Navbar = ({ clubname, logo, pages, links }: Nav) => {
  return (
    <div className="flex justify-center">
      <nav className="w-screen max-w-[800px] fixed pt-8 z-40 px-8">
        <div className="max-w-[800px] grow rounded-md bg-white/20 backdrop-blur-md border flex justify-between items-center px-5 py-3">
          <Link to="/" className="flex items-center justify-start gap-2 font-bold">
            <img src={logo} className="h-8 w-8"></img>
            {clubname}
          </Link>
          <button className=" md:hidden" onClick={ShowPopup}>
            <MenuIcon />
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-end gap-6 items-center">
            <Link to={links[1]}>{pages[1]}</Link>
            <Link to={links[2]}>{pages[2]}</Link>
            <Link to={links[3]}>{pages[3]}</Link>
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        id="popup"
        className="hidden flex fixed w-screen h-screen p-2.5 z-50 bg-neutral-950">
        <div className="flex flex-col min-w-[350px] w-full mx-2.5 rounded-xl border-2 border-white">
          
          <div className="flex flex-col w-[100%] items-end">
            <button onClick={ShowPopup}>
              <img className="w-6 mt-2.5 mr-2.5 text-white" src={close_button}></img>
            </button>
          </div>

          <div className="flex flex-col h-5/6 justify-center items-center gap-5">
            <img src={logo} className="h-20 w-20" />
            <Link to={links[0]} className="text-[32px] font-bold">
              {pages[0]}
            </Link>
            <Link to={links[1]} className="text-[32px] font-bold">
              {pages[1]}
            </Link>
            <Link to={links[2]} className="text-[32px] font-bold">
              {pages[2]}
            </Link>
            <Link to={links[3]} className="text-[32px] font-bold">
              {pages[3]}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
