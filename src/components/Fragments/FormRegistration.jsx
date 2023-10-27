import { useEffect, useRef } from 'react';
import { Button } from '../Elements/Button';
import { InputForm } from '../Elements/Input';

export const FormRegistration = () => {
  const fullnameRef = useRef(null);

  useEffect(() => {
    fullnameRef.current.focus();
  });

  const handleRegistration = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <form action="" className="my-4" onSubmit={handleRegistration}>
      <InputForm type="text" name="fullname" placeholder="Enter your fullname" label="Fullname" ref={fullnameRef} />
      <InputForm type="text" name="username" placeholder="Enter your username" label="Username" />
      <InputForm type="password" name="password" placeholder="******" label="Password" />
      <InputForm type="password" name="confirmPassword" placeholder="******" label="Confirm Password" />
      <Button type="submit" addClass="w-full font-medium mt-4">
        Registration
      </Button>
    </form>
  );
};
