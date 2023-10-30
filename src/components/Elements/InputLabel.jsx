import { Input } from '@material-tailwind/react';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkMode';

export const InputLabel = ({ name, label, autoFocus = '' }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return <Input variant="outlined" name={name} label={label} size="lg" color={`${isDarkMode === 'dark' ? 'white' : 'light-blue'}`} className={`${isDarkMode === 'dark' ? 'text-white focus:ring' : 'text-black'}`} autoFocus={autoFocus} />;
};
