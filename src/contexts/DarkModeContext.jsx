import { createContext, useState } from 'react';

export const DarkModeContext = createContext();
const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') || 'light');
  return <DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>{children}</DarkModeContext.Provider>;
};

export default DarkModeContextProvider;
