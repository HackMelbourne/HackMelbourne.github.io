import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';

import MelbourneHack2023 from './hackathonWebsites/MelbourneHack/2023';
import Root from './components/Root';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />
     */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<App />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/melbournehack" element={<MelbourneHack2023 />} />
          <Route path="/hackathon" element={<MelbourneHack2023 />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* TODO create a NoMatch error page */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
