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
      {isShowNavbar ? <Navbar /> : null}
      <div className="w-screen max-w-full bg-neutral-950">
        <Outlet />
        <ul className="bg-circles">
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
