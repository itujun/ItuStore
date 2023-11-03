import { Button, Typography } from '@material-tailwind/react';
import { login } from '../../services/auth.service';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { InputLabel } from '../Elements/InputLabel';

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const [isDarkMode] = useContext(DarkModeContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!e.target.username.value) return setLoginFailed('Username is required');
    if (!e.target.password.value) return setLoginFailed('Password is required');
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        localStorage.setItem('isLogin', true);
        window.location.href = '/products';
      } else {
        setLoginFailed(res);
      }
    });
  };

  return (
    <form action="" className="my-4" onSubmit={handleLogin}>
      <Typography variant="small" color={isDarkMode === 'dark' ? 'inherit' : 'red'} className={`text-center font-semibold mb-3 ${isDarkMode === 'dark' ? 'text-red-100 ' : ''} `}>
        {loginFailed}
      </Typography>
      <div className="flex gap-6 flex-col">
        <InputLabel name="username" label="Username" autoFocus />
        <InputLabel name="password" type="password" label="Password" />
      </div>

      <Button className="w-full flex items-center mt-4 gap-2 justify-center" variant="gradient" color="light-blue" size="sm" type="submit">
        Login
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
      </Button>
    </form>
  );
};
