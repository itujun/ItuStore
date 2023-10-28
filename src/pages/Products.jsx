import { StickyNavbar } from '../components/Fragments/Navbar';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

export const ProductsPage = () => {
  return (
    <div className="max-h-[768px] w-[calc(100%-0)] mb-96">
      <StickyNavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-10/12 mx-auto">
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader shadow={false} floated={false} className="h-60">
            <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="card-image" className="h-full w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal opacity-75">
              With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button ripple={false} fullWidth={true} variant="gradient" color="light-blue" className="text-white shadow-none hover:scale-105 hover:shadow-none hover:opacity-80 focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
