import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';

const dontShowNavbarPathnames = ['/melbournehack', '/hackathon'];

const Layout = () => {
  const location = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(true);
  useEffect(() => {
    console.log('useEffect!');
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    const isHidden = dontShowNavbarPathnames.some((path) => pathname.includes(path) || hash.includes(path));
    setIsShowNavbar(!isHidden);
  }, [location]);

  return (
    <>
      {isShowNavbar ? <Navbar /> : null}
      <Outlet />
    </>
  );
};

export default Layout;
