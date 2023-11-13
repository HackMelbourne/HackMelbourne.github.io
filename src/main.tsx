import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Styles (outdated)
import './index.css';

// Pages
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode></React.StrictMode>);
