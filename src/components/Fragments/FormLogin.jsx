import { useEffect, useRef } from 'react';
import { Button } from '../Elements/Button';
import { InputForm } from '../Elements/Input';

export const FormLogin = () => {
  const usernameRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/products';
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form action="" className="my-4" onSubmit={handleLogin}>
      <InputForm type="text" name="username" placeholder="Enter your username" label="Username" ref={usernameRef} />
      <InputForm type="password" name="password" placeholder="******" label="Password" />
      <Button type="submit" addClass="w-full font-medium mt-4">
        Login
      </Button>
    </form>
  );
};
