import { Button, Input } from '@material-tailwind/react';

export const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/products';
  };

  return (
    <form action="" className="my-4" onSubmit={handleLogin}>
      <div className="flex gap-6 flex-col">
        <Input variant="outlined" label="Username" size="lg" color="light-blue" autoFocus />
        <Input variant="outlined" label="Password" size="lg" color="light-blue" />
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
