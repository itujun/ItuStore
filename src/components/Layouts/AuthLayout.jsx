import { Typography } from '@material-tailwind/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { ButtonDarkMode } from '../Elements/ButtonDarkMode';

export const AuthLayout = ({ children, title }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`flex flex-col box-border min-h-screen ${isDarkMode === 'dark' ? 'bg-blue-gray-800' : ''}`}>
      <div className="text-center mt-2">
        <ButtonDarkMode />
      </div>
      <div className={`flex justify-center min-h-[calc(100vh-50px)] items-center`}>
        <div className="w-full max-w-xs">
          <div className={`w-full max-w-xs rounded-xl p-5 box-border ${isDarkMode === 'dark' ? 'bg-blue-gray-600' : ''}`}>
            <Typography variant="h3" color={`${isDarkMode ? 'inherit' : 'light-blue'}`} className={`font-bold ${isDarkMode ? 'text-light-blue-300' : ''}`} textGradient>
              {title}
            </Typography>
            <Typography as="span" variant="small" className={` text-slate-500 mt-1 mb-6 ${isDarkMode === 'dark' ? 'text-white' : ''}`}>
              Welcome, please enter your details
            </Typography>
            {children}
            <Typography as="span" variant="small" className={`mt-6 text-center ${isDarkMode === 'dark' ? 'text-white' : ''}`}>
              {title === 'Login' ? `Don't have an account?` : 'Already have an account?'}{' '}
              <Link to={title === 'Login' ? '/registration' : '/login'} className={`font-bold ${isDarkMode === 'dark' ? 'text-light-blue-300' : 'text-light-blue-500'}`}>
                {title === 'Login' ? 'Register' : 'Login'}
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
