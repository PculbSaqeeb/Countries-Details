// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState('light');

//   const lightMode = () => {
//     setThemeMode('light');
//   };

//   const darkMode = () => {
//     setThemeMode('dark');
//   };

//   useEffect(() => {
//     document.querySelector('html').classList.remove('light', 'dark');
//     document.querySelector('html').classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeContext.Provider value={{ themeMode, lightMode, darkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);


import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  const lightMode = () => {
    setThemeMode('light');
    localStorage.setItem('themeMode', 'light');
  };

  const darkMode = () => {
    setThemeMode('dark');
    localStorage.setItem('themeMode', 'dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, lightMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
