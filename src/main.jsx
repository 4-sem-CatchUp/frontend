import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes'; // named import
import './styles/index.css';

/**
 * Application entry point
 *
 * Mounts the React application into the DOM.
 * - Wraps the app in React.StrictMode for highlighting potential issues
 * - Provides routing via RouterProvider with the configured router
 * - Imports global styles from index.css
 *
 * Root element: <div id="root"></div> in index.html
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
