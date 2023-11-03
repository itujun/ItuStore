import { Link, useParams } from 'react-router-dom';
import { StickyNavbar } from '../../components/Fragments/Navbar';
import { useContext, useEffect, useState } from 'react';
import { getSingleProduct } from '../../services/products.service';
import { Button, Typography } from '@material-tailwind/react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { useCart } from '../../hooks/useCart';

export const DetailProductPage = () => {
  const { id } = useParams();
  const [isDarkMode] = useContext(DarkModeContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getSingleProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  const { dispatch } = useCart();
  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };

  return (
    <>
      <StickyNavbar />
      <div className={`flex justify-center w-100 min-h-screen items-center ${isDarkMode === 'dark' ? 'bg-blue-gray-900' : ''}`}>
        {Object.keys(product).length > 0 ? (
          <div className={`flex shadow-2xl h-fit my-28 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl rounded-xl ${isDarkMode === 'dark' ? 'bg-blue-gray-500 shadow-light-blue-500' : ''}`}>
            <div className="flex flex-col md:flex-row font-sans">
              <div className="md:w-6/12 lg:w-5/12 xl:w-4/12 flex items-center">
                <img src={product.image} alt={product.title} className=" inset-0 w-full object-cover object-center rounded-s-lg " loading="lazy" />
              </div>
              <form className="md:w-6/12 lg:w-7/12 xl:w-8/12 p-6 flex flex-col justify-between">
                <div className="flex flex-col flex-wrap">
                  <Typography as="h1" variant="h5" className={`flex-auto font-semibold ${isDarkMode === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {product.title}
                  </Typography>
                  <Typography color={isDarkMode === 'dark' ? 'amber' : 'green'} className="font-bold mt-2">
                    ${product.price}
                  </Typography>
                  <Typography className={`w-full flex-none text-sm font-medium mt-0 ${isDarkMode === 'dark' ? 'text-blue-gray-50' : 'text-slate-800'}`}>
                    Review{' '}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mb-1 mr-1 text-amber-400 inline">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {product.rating.rate}/5 ({product.rating.count})
                  </Typography>
                  <div className="flex flex-col items-baseline mt-4 mb-8 ">
                    <Typography variant="small" className={`space-x-2 font-semibold block ${isDarkMode === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      Description:
                    </Typography>
                    <Typography variant="small" className={`space-x-2 flex ${isDarkMode === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      {product.description}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col justify-between border-t-2 pt-6 border-slate-200">
                  <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                      <Button variant="gradient" size="sm" color="amber" className="font-semibold rounded-md text-black" type="submit">
                        Buy now
                      </Button>
                      <Button size="sm" variant="gradient" color="light-blue" className={`font-semibold rounded-md`} type="button" onClick={() => addToCart({ id, qty: 1 })}>
                        Add to Cart
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      className={`flex-none flex items-center justify-center  rounded-md text-slate-300 shadow border border-blue-gray-200 bg-transparent ${isDarkMode === 'dark' ? 'hover:shadow-light-blue-500 hover:bg-white' : ''}`}
                      type="button"
                      aria-label="Like"
                    >
                      <svg width="20" height="20" fill="currentColor" aria-hidden="true" className="text-red-600 h-5 w-5">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </Button>
                  </div>
                  <Typography variant="small" className={`${isDarkMode === 'dark' ? 'text-white' : 'text-blue-gray-900'}`}>
                    Free shipping on all continental US orders.
                  </Typography>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 justify-center min-h-screen items-center flex-col">
            <h1 className={`${isDarkMode === 'dark' ? 'text-white' : 'text-slate-900'}`}>Product Not Found.</h1>
            <Link to="/products">
              <Button color="light-blue" variant="gradient">
                Back to Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
