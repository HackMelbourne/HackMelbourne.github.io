import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from './layouts/Layout';

// Pages
import Events from './routes/Events';
import Sponsor from './routes/Sponsor';
import About from './routes/About';
import Root from './routes/Root';
import Privacy from './routes/Privacy';
import Terms from './routes/Terms';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="sponsor" element={<Sponsor />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
