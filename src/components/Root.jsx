import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const dontShowNavbarPathnames = ['/melbournehack'];

const Root = () => {
  return (
    <>
      {dontShowNavbarPathnames.includes(window.location.pathname) ? null : <Navbar />}
      <Outlet />
    </>
  );
};

export default Root;
