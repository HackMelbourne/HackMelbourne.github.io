import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import close_button from '/img/close-button.png';
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';

interface Nav {
  clubname: string;
  logo: string;
  pages: string[];
  links: string[];
}

const Navbar = ({ clubname, logo, pages, links }: Nav) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [activePage, setActivePage] = useState<number | null>(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const revealMobileNav = (index: number | null) => {
    setActivePage(index);
    setIsSubMenuOpen(false);
  };

  const revealMobileNavItem = () => {
    if (activePage == null) return
    return (
      <Slide in={activePage !== null}> 
        <div className="flex flex-col justify-start items-start min-h-screen w-3/4 m-auto gap-3 mt-16">
          <h3 className="text-xl" onClick={()=>{
            revealMobileNav(null);
            setIsSubMenuOpen(true);
          }}>Back</h3>
          <h3 className="text-3xl font-bold bg-white bg-opacity-10 py-2 px-4 w-full rounded-md">{pages[activePage]}</h3>
          <div className="flex flex-col h-1/3 w-full justify-between">
            <div className="border-white border w-full h-full rounded-md bg-neutral-700"></div>
            <div className="border-white border w-full h-full rounded-md bg-neutral-700 mt-2"></div>
            <div className="border-white border w-full h-full rounded-md bg-neutral-700 mt-2"></div>
          </div>
        </div>
      </Slide>
    );
  };

  const tempNavItem = () => {
    if (activePage == null) return
    return (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16 w-fit h-fit">
        {/* Really bootleg solution, creates an invisible box to ensure hovered nav item doesnt 
        dissapear since the items are disconnected from the bar */}
        <div className="absolute -top-6 transform -translate-x-1/2 h-max w-max py-2">
          <div className="border-white border w-36 h-14 rounded-md bg-neutral-700"></div>
          <div className="border-white border w-36 h-14 rounded-md bg-neutral-700 mt-2"></div>
          <div className="border-white border w-36 h-14 rounded-md bg-neutral-700 mt-2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center" onMouseLeave={()=>setActivePage(null)}>
      <nav 
        className="w-screen max-w-[800px] fixed pt-8 z-40 px-8"
      >
        <div className="max-w-[800px] grow rounded-md bg-black/20 backdrop-blur-md border flex justify-between items-center px-5 py-3">
          <Link to={links[0]} className="flex items-center justify-start gap-2 font-bold" onClick={handleLinkClick}>
            <img src={logo} className="h-8 w-8"></img>
            {clubname}
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-end gap-6 items-center">
            {pages.map((page, index) => (
                <div
                  onMouseEnter={()=>setActivePage(index)} 
                  className="relative"
                >
                  <Link
                    key={index}
                    to={links[index]}
                    onClick={()=>setActivePage(index)}
                    className="hover:underline hover:text-primary">
                    {page}
                  </Link>
                  {activePage === index && tempNavItem()} 
                </div>
              ))}
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <Slide in={isMenuOpen}>
        <nav id="popup" className="flex fixed items w-screen h-screen p-2.5 z-50 bg-neutral-950">
          <div className="flex flex-col w-full mx-2.5 rounded-xl border-2 border-white">
            <div className="flex w-[100%] justify-between items-center">
              <Link to={links[0]} onClick={handleLinkClick}>
                <img src={logo} className="h-14 w-14 ml-5 mt-5" />
              </Link>
              <button className="mr-5 mt-5" onClick={toggleMenu}>
                <CloseIcon fontSize="large" />
              </button>
              </div>
              {revealMobileNavItem()}
              <Slide in={isSubMenuOpen}>
                <div className="w-full h-full justify-center items-center">
                  <div className="flex flex-col h-5/6 justify-center items-center gap-5">
                    {pages.map((page, index) => (
                      <>
                        <div key={index} className="text-[32px] font-bold" onClick={() => revealMobileNav(index)}>{page}
                          {/*
                            <Link key={index} to={links[index]} className="text-[32px] font-bold" onClick={handleLinkClick}>
                            {page}
                          </Link>
                          */}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </Slide>
          </div>
        </nav>
      </Slide>
    </div>
  );
};
export default Navbar;
