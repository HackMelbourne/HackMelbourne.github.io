import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const dontShowNavbarPathnames = ['/melbournehack'];

const Root = () => {
  console.log(window.location.pathname);
  return (
    <>
      {window.location.pathname.includes(dontShowNavbarPathnames) ||
      window.location.hash.includes(dontShowNavbarPathnames) ? null : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
};

export default Root;
