import { IconButton, Typography } from '@material-tailwind/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/DarkModeContext';

export const AuthLayout = ({ children, title }) => {
  const [isDarkMode, setIsDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`flex flex-col box-border min-h-screen ${isDarkMode === 'dark' ? 'bg-blue-gray-800' : ''}`}>
      <div className="text-center mt-2">
        <IconButton
          size="sm"
          variant="text"
          className={` ${isDarkMode === 'dark' ? 'text-white' : ''}`}
          onClick={() => {
            localStorage.setItem('darkMode', isDarkMode === 'dark' ? 'light' : 'dark');
            setIsDarkMode(localStorage.getItem('darkMode'));
          }}
        >
          {isDarkMode === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </IconButton>
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
