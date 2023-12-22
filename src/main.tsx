import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from './components/Layout';

// Pages
import Events from './routes/Events';
import Sponsor from './routes/Sponsor';
import About from './routes/About';
import Root from './routes/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="sponsor" element={<Sponsor />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
