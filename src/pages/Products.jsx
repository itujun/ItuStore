import { StickyNavbar } from '../components/Fragments/Navbar';
import CardProduct from '../components/Fragments/CardProduct';
import { useContext, useEffect, useState } from 'react';
import { getProducts } from '../services/products.service';
import { useLogin } from '../hooks/useLogin';
import { DarkModeContext } from '../contexts/DarkModeContext';

export const ProductsPage = () => {
  useLogin();
  const [isDarkMode] = useContext(DarkModeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className={` w-[calc(100%-0)] ${isDarkMode === 'dark' ? 'bg-blue-gray-800' : ''}`}>
      <StickyNavbar />
      <div className="pt-20 lg:pt-28 box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-10/12 mx-auto">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title} price={product.price}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer id={product.id} />
          </CardProduct>
        ))}
        ;
      </div>
    </div>
  );
};
