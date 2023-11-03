import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/Auth/Login.jsx';
import { ErrorPage } from './pages/404.jsx';
import { RegistrationPage } from './pages/Auth/Registration.jsx';
import { ProductsPage } from './pages/Product/Products.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import DarkModeContextProvider from './contexts/DarkModeContext.jsx';
import { CartProvider } from './contexts/CartProductContext.jsx';
import { DetailProductPage } from './pages/Product/DetailProduct.jsx';
import { TotalPriceProvider } from './contexts/TotalPriceContext.jsx';

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
  {
    path: '/products/:id',
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <DarkModeContextProvider>
        <CartProvider>
          <TotalPriceProvider>
            <RouterProvider router={router} />
          </TotalPriceProvider>
        </CartProvider>
      </DarkModeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
