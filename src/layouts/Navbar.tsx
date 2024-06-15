import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavbarPillProps } from '../features/Navbar/NavbarPillProps';

// Styles
import '../styles/gradients.css';

// Images
// Change image to remove the bottom text
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import { List } from '@mui/material';
import NavbarPill from '../features/Navbar/NavbarPill';

interface Nav {
  clubname: string;
  logo: string;
  pages: string[];
  links: string[];
  pills: NavbarPillProps[][];
}

const Navbar = ({ clubname, logo, pages, links, pills }: Nav) => {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [activePage, setActivePage] = useState<number | null>(null); 
  const [activeSubMenu, setActiveSubMenu] = useState<boolean[]>(new Array(pages.length).fill(false));

  const menuVars = {
    initial: {
      scaleY: 0.
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      scaleY: 0,
      transiton: {
        duration: 0.1
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDesktopMenuOpen(isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDesktopMenuOpen(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const revealMobileNav = (index: number | null) => {
    setActivePage(index);
    setIsSubMenuOpen(false);
  };

  const revealMobileNavItems = () => {
    if (activePage == null) return
    return (
      <Slide in={activePage !== null}> 
        <div className="flex flex-col justify-start items-start min-h-screen w-3/4 m-auto gap-3 mt-16">
          <h3 className="text-xl" onClick={()=>{
            revealMobileNav(null);
            setIsSubMenuOpen(true);
          }}>Back</h3>
          <h3 className="text-3xl font-bold bg-white bg-opacity-10 py-2 px-4 w-full rounded-md">{pages[activePage]}</h3>
          <div className="flex flex-col h-1/3 w-full">
            {pills[activePage].map((pill) => (
                <NavbarPill {...pill} />
              ))}
          </div>
        </div>
      </Slide>
    );
  };

  const revealSubMenu = (index: number) => {
    setActiveSubMenu((prev) => {
      const newActiveSubMenu = [...prev];
      newActiveSubMenu[index] = !newActiveSubMenu[index];
      return newActiveSubMenu;
    });
  };

  const navItems = ( pills : NavbarPillProps[], title : string) => {
    if (activePage == null) return
    return (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16 w-fit h-fit">
        {/* Really bootleg solution, creates an invisible box to ensure hovered nav item doesnt 
        dissapear since the items are disconnected from the bar */}
        <div className="absolute -top-6 transform -translate-x-1/2 h-max w-max py-4">
          <div className="w-80 border px-8 pb-6 pt-4 rounded-md bg-black/80 backdrop-blur-md flex-col gap-1">
            <div className="flex items-center">
              <h2 className="font-semibold">{title}</h2>
              <div className="ml-3 flex-grow border-primary border-t-4 rounded-md" />
            </div>
            {pills.map((pill) => (
              <NavbarPill {...pill} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center" onMouseLeave={()=>setActivePage(null)}>
      {isDesktopMenuOpen && (
      <nav className="w-screen max-w-[800px] fixed pt-8 z-40 px-8">
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
                    className="">
                    {page}
                    <span className={`${activePage == index ? "visible" : "hidden"} absolute left-0 -bottom-2 w-full h-1 bg-primary scale-x-100`}></span>
                  </Link>
                  {activePage === index && navItems(pills[index], page)}
                </div>
              ))}
          </div>
        </div>
      </nav>
      )}

      {/* MOBILE */}
      <Slide in={isMenuOpen}>
        <div className="w-full pt-8 p-3 fixed z-40">
          <nav
            className="w-full flex flex-col items p-3 z-50 rounded-xl border-2 border-white backdrop-blur">
              <List style={{maxHeight: '66vh', overflow: 'auto'}}>
              <div className="flex w-full justify-between items-center pt-1 px-2">
                <Link to={links[0]} onClick={handleLinkClick} className="font-semibold">
                  {clubname}
                </Link>
                <button onClick={toggleMenu}>
                  <CloseIcon fontSize="medium" />
                </button>
              </div>
                {/* {revealMobileNavItems()} */}
                <div className="w-full h-full justify-center items-center pt-3">
                  <div className="flex flex-col justify-center px-8 py-6 gap-7">
                    {pages.map((page, index) => (
                        <div key={index} className="text-lg font-bold" onClick={() => revealSubMenu(index)}>{page}
                            <AnimatePresence>
                            {activeSubMenu[index] && (
                            <motion.div variants={menuVars} 
                              initial="initial"
                              animate='animate'
                              exit='exit'
                              className='origin-top'
                              >
                              {pills[index].map((pill: NavbarPillProps) => (
                                    <NavbarPill {...pill} />
                                  ))}
                            </motion.div>
                            )}
                            </AnimatePresence>
                        </div>                  
                    ))}
                  </div>
                </div>
                </List>  
          </nav>
        </div>
      </Slide>
    </div>
  );
};
export default Navbar;