import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './index.css';

import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />
     */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/sponsors" element={<Sponsor />} />
          {/* Used to be a route to melbourne hack */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
