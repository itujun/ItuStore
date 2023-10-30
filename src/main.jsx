import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/Login.jsx';
import { ErrorPage } from './pages/404.jsx';
import { RegistrationPage } from './pages/Registration.jsx';
import { ProductsPage } from './pages/Products.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import DarkModeContextProvider from './contexts/DarkModeContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
