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
    <div className="w-screen max-w-full bg-neutral-950">
      {isShowNavbar ? <Navbar /> : null}
      <Outlet />
      {/* I dont know why bg-circles is showing infront of Outlet and can't fix it */}
      {/* <ul className="bg-circles">
          <li></li>
          <li></li>
        </ul> */}
    </div>
  );
};

export default Layout;
