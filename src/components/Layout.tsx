import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';

import '../styles/layout.css';

// Pathnames here will not have a navbar
const dontShowNavbarPathnames = ['/example'];

const Layout = () => {
  const location = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(true);

  // Navbar conditional rendering
  useEffect(() => {
    console.log('useEffect!');
    const pathname = window.location.pathname;
    console.log(pathname);
    const isHidden = dontShowNavbarPathnames.some((path) => pathname.includes(path));
    setIsShowNavbar(!isHidden);
  }, [location]);

  return (
    <>
      {' '}
      <div className="w-screen max-w-full">
        {isShowNavbar ? <Navbar /> : null}
        <Outlet />
        <ul className="w-screen max-w-full bg-circles -z-10 overflow-x-clip">
          <li></li>
          <li className="hidden md:block"></li>
        </ul>
      </div>
      <div className="w-screen max-w-full h-screen fixed top-0 bg-neutral-950 -z-20"></div>
    </>
  );
};

export default Layout;
