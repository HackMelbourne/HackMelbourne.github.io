import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const dontShowNavbarPathnames = ['/melbournehack'];

const Root = () => {
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
