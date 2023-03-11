import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Initiatives from './routes/Initiatives';
import Sponsor from './routes/Sponsor';
import Navbar from './components/Navbar';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
