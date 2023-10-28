import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <Typography variant="h3" color="light-blue" className="font-bold" textGradient>
          {title}
        </Typography>
        <p className="font-medium text-slate-500 mt-1 mb-6">Welcome, please enter your details</p>
        {children}
        <p className="mt-6 text-center">
          {title === 'Login' ? `Don't have an account?` : 'Already have an account?'}{' '}
          <Link to={title === 'Login' ? '/registration' : '/login'} className="text-light-blue-500 font-bold">
            {title === 'Login' ? 'Register' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};
