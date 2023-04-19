import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './index.css';
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';

import MelbourneHack2023 from './hackathonWebsites/MelbourneHack/2023';
import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />
     */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/melbournehack" element={<MelbourneHack2023 />} />
          <Route path="/hackathon" element={<Navigate to="/melbournehack" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
