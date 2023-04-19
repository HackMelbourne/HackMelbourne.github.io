import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const dontShowNavbarPathnames = ['/melbournehack', '/hackathon'];

const Layout = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(true);
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    const isHidden = dontShowNavbarPathnames.some((path) => pathname.includes(path) || hash.includes(path));
    setIsShowNavbar(!isHidden);
  }, []);

  return (
    <>
      {isShowNavbar ? <Navbar /> : null}
      <Outlet />
    </>
  );
};

export default Layout;
