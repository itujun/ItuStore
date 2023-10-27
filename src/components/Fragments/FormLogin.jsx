import { useEffect, useRef } from 'react';
import { Button } from '../Elements/Button';
import { InputForm } from '../Elements/Input';

export const FormLogin = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form action="" className="my-4">
      <InputForm type="text" name="username" placeholder="Enter your username" label="Username" ref={usernameRef} />
      <InputForm type="password" name="password" placeholder="******" label="Password" />
      <Button type="submit" addClass="w-full" />
    </form>
  );
};
