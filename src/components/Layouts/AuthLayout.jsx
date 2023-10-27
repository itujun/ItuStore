import { Link } from 'react-router-dom';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 my-2 ">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
        {children}
        <p className="mt-6 text-center">
          {title === 'Login' ? `Don't have an account?` : 'Already have an account?'}{' '}
          <Link to={title === 'Login' ? '/registration' : '/login'} className="text-blue-600 font-bold">
            {title === 'Login' ? 'Register' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};
