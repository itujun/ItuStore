import { createContext, useState } from 'react';

export const DarkModeContext = createContext();
const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return <DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>{children}</DarkModeContext.Provider>;
};

export default DarkModeContextProvider;
