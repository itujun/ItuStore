import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => {
  const { name, type = 'text', placeholder } = props;
  return <input type={type} name={name} id={name} className="block w-full p-2 mt-2 border rounded-md text-sm placeholder:opacity-70 focus:outline-none focus:ring focus:ring-blue-200" placeholder={placeholder} ref={ref} />;
});
