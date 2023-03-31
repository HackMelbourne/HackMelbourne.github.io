import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Navbar from './components/Navbar';
import MelbourneHack2023 from './hackathonWebsites/MelbourneHack/2023';

const dontShowNavbarPathnames = ['/melbournehack'];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/initiatives',
    element: <Initiatives />,
  },
  {
    path: '/sponsors',
    element: <Sponsor />,
  },
  {
    path: '/melbournehack',
    element: <MelbourneHack2023 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {dontShowNavbarPathnames.includes(window.location.pathname) ? null : <Navbar />}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
