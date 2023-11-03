import { StickyNavbar } from '../../components/Fragments/Navbar';
import CardProduct from '../../components/Fragments/CardProduct';
import { useContext, useEffect, useState } from 'react';
import { getProducts } from '../../services/products.service';
import { useLogin } from '../../hooks/useLogin';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductsPage = () => {
  useLogin();
  const [isDarkMode] = useContext(DarkModeContext);
  const [products, setProducts] = useState([]);

  const notify = () => {
    toast.success('Login successful. Welcome Juna!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useEffect(() => {
    return () => notify();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      const timeoutId = setTimeout(() => {
        localStorage.removeItem('isLogin');
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className={` w-[calc(100%-0)] ${isDarkMode === 'dark' ? 'bg-blue-gray-900' : ''}`}>
      <StickyNavbar />
      <div className="pt-20 lg:pt-28 box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-10/12 mx-auto">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} id={product.id} />
            <CardProduct.Body title={product.title} price={product.price} id={product.id}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer id={product.id} />
          </CardProduct>
        ))}
        ;
      </div>
      {localStorage.getItem('isLogin') === 'true' ? <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" /> : ''}
      ;
    </div>
  );
};
