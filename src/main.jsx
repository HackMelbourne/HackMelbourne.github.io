import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Navbar from './components/Navbar';
import MelbourneHack2023 from './hackathonWebsites/MelbourneHack/2023';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/melbournehack" element={<MelbourneHack2023 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
