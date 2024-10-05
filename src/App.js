
// import React, { useState } from 'react';
// import Header from './Components/Header';
// import SearchBar from './Components/SearchBar';
// import CountryList from './Components/CountryList';

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem('darkMode');
//     return savedMode === 'true'; 
//   });

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => {
//       const newMode = !prevMode;
//       localStorage.setItem('darkMode', newMode); 
//       return newMode;
//     });
//   };

//   return (
//     <div className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
//       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <SearchBar setQuery={setQuery}  darkMode={darkMode} />
//       <CountryList query={query}  darkMode={darkMode} />
//     </div>
//   );
// };

// export default App;






import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import CountryList from './Components/CountryList';
import { ThemeProvider, useTheme } from './context/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetail';

const App = () => {
  const [query, setQuery] = useState('');
  return (
    <ThemeProvider>
      <MainApp setQuery={setQuery} query={query} />
    </ThemeProvider>
  );
};

const MainApp = ({ setQuery, query }) => {
  const { themeMode } = useTheme();
  
  return (
    <div className={`${themeMode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
        <Header themeMode={themeMode} />
      <Router>
        <SearchBar themeMode={themeMode} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<CountryList query={query} />} />
          <Route path="/country" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
