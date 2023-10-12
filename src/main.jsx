import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Sidebar } from './pages/index.js';
import { Home } from './pages/index.js';
import { Calender } from './pages/index.js';
import { Setting } from './pages/index.js';
import { Archive } from './pages/index.js';
import { Department } from './pages/index.js';
import { Task } from './pages/index.js';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },

      { path: 'calender', element: <Calender /> },
      { path: 'archive', element: <Archive /> },
      { path: 'settings', element: <Setting /> },
      { path: 'departments', element: <Department /> },
      { path: 'tasks', element: <Task /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
