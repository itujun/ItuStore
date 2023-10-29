import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const CardProduct = ({ children }) => {
  return <Card className="w-auto flex flex-col justify-between border">{children}</Card>;
};

const Header = ({ image }) => {
  return (
    <CardHeader shadow={false} floated={false} className="h-52">
      <img src={image} alt="card-image" className="w-full object-cover" />
    </CardHeader>
  );
};

const Body = (props) => {
  const { title, price, children } = props;
  return (
    <CardBody>
      <div className="mb-2 flex flex-col justify-between">
        <Typography color="blue-gray" className="font-medium">
          {title.substring(0, 45)}...
        </Typography>
        <Typography color="green" className="font-bold">
          ${price}
        </Typography>
      </div>
      <Typography variant="small" color="gray" className="font-normal opacity-75">
        {children.substring(0, 100)}...
      </Typography>
    </CardBody>
  );
};

const Footer = () => {
  return (
    <CardFooter className="pt-0">
      <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
        Add to Cart
      </Button>
    </CardFooter>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
