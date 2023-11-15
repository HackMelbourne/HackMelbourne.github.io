import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css';

// Pages
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Layout from './components/Layout';
import Root from './routes/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="initiatives" element={<Initiatives />} />
      <Route path="sponsors" element={<Sponsor />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
