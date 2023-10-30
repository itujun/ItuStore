import { StickyNavbar } from '../components/Fragments/Navbar';
import CardProduct from '../components/Fragments/CardProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/products.service';
import { useLogin } from '../hooks/useLogin';

export const ProductsPage = () => {
  useLogin();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="max-h-[768px] w-[calc(100%-0)] mb-96">
      <StickyNavbar />
      <div className="mt-20 lg:mt-28 box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-10/12 mx-auto">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title} price={product.price}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer />
          </CardProduct>
        ))}
        ;
      </div>
    </div>
  );
};
