import { Tooltip, Typography } from '@material-tailwind/react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { ButtonDarkMode } from '../Elements/ButtonDarkMode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthLayout = ({ children, title }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  const notify = () => {
    toast.success('Logout successful!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useEffect(() => {
    return () => notify();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('isLogout')) {
      const timeoutId = setTimeout(() => {
        localStorage.removeItem('isLogout');
      }, 3100);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  localStorage.getItem('token') ? (window.location.href = '/products') : null;

  return (
    <div className={`flex flex-col box-border min-h-screen ${isDarkMode === 'dark' ? 'bg-blue-gray-900' : ''}`}>
      <div className="text-center mt-2">
        <ButtonDarkMode />
      </div>
      <div className={`flex justify-center min-h-[calc(100vh-50px)] items-center`}>
        <div className="w-full max-w-xs">
          <div className={`w-full max-w-xs rounded-xl shadow-2xl p-5 box-border ${isDarkMode === 'dark' ? 'bg-blue-gray-500 shadow-light-blue-500' : ''}`}>
            <Typography variant="h3" color={`${isDarkMode ? 'inherit' : 'light-blue'}`} className={`font-bold ${isDarkMode ? 'text-light-blue-300' : ''}`} textGradient>
              {title}
            </Typography>
            <div className="flex justify-between">
              <Typography as="span" variant="small" className={` text-slate-500 mt-1 mb-6 ${isDarkMode === 'dark' ? 'text-white' : ''}`}>
                Welcome, please enter your details
              </Typography>
              <Tooltip
                placement="bottom"
                className={`border border-blue-gray-50 px-4 py-3 shadow-xl shadow-black/10 ${isDarkMode === 'dark' ? 'bg-blue-gray-100' : 'bg-white'}`}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: -25 },
                }}
                content={
                  title === 'Login' ? (
                    <div className="w-40">
                      <Typography color="blue-gray" variant="paragraph" className="font-medium flex">
                        Username:{' '}
                        <Typography variant="small" color="blue-gray" className="ml-1 mt-1 font-semibold">
                          johnd
                        </Typography>
                      </Typography>
                      <Typography color="blue-gray" variant="paragraph" className="font-medium flex">
                        Password:{' '}
                        <Typography variant="small" color="blue-gray" className="ml-1 mt-1 font-semibold">
                          m38rmF$
                        </Typography>
                      </Typography>
                    </div>
                  ) : (
                    <div className="w-40">
                      <Typography color="blue-gray" variant="small" className="font-medium">
                        Ini hanyalah template semata, silahkan langsung menuju ke <b>Form Login</b>
                      </Typography>
                    </div>
                  )
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className={`h-5 w-5 cursor-pointer ${isDarkMode === 'dark' ? 'text-blue-gray-50' : 'text-blue-gray-500'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </Tooltip>
            </div>
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
      {localStorage.getItem('isLogout') === 'true' ? (
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      ) : (
        ''
      )}
    </div>
  );
};
