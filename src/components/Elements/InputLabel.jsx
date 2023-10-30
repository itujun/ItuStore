import { Input } from '@material-tailwind/react';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

export const InputLabel = ({ name, label, type = 'text', autoFocus = '' }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <Input
      variant="outlined"
      name={name}
      type={type}
      label={label}
      size="lg"
      color={`${isDarkMode === 'dark' ? 'white' : 'light-blue'}`}
      className={`${isDarkMode === 'dark' ? 'text-white focus:ring' : 'text-black'}`}
      autoFocus={autoFocus}
    />
  );
};
