import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { useCart } from '../../hooks/useCart';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const CardProduct = ({ children }) => {
  const [isDarkMode] = useContext(DarkModeContext);
  return <Card className={`w-auto flex flex-col justify-between border ${isDarkMode === 'dark' ? 'bg-blue-gray-500 border-0' : ''}`}>{children}</Card>;
};

const Header = ({ image, id }) => {
  return (
    <CardHeader shadow={false} floated={false} className="h-52">
      <Link to={`/products/${id}`}>
        <img src={image} alt="card-image" className="w-full object-cover" />
      </Link>
    </CardHeader>
  );
};

const Body = (props) => {
  const { title, price, children, id } = props;
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <CardBody>
      <Link to={`/products/${id}`}>
        <div className="mb-2 flex flex-col justify-between">
          <Typography color={`${isDarkMode === 'dark' ? 'white' : 'blue-gray'}`} className="font-medium">
            {title.substring(0, 45)}...
          </Typography>
          <Typography color={`${isDarkMode === 'dark' ? 'amber' : 'green'}`} className="font-bold">
            ${price}
          </Typography>
        </div>
        <Typography variant="small" color={`${isDarkMode === 'dark' ? 'white' : 'blue-gray'}`} className="font-normal opacity-75">
          {children.substring(0, 100)}...
        </Typography>
      </Link>
    </CardBody>
  );
};

const Footer = ({ id }) => {
  const { dispatch } = useCart();
  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };
  return (
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        variant="gradient"
        color="light-blue"
        className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100"
        onClick={() => addToCart({ id, qty: 1 })}
      >
        Add to Cart
      </Button>
    </CardFooter>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
