
// import React from 'react';
// import { MdOutlineDarkMode } from 'react-icons/md';
// import { CiLight } from 'react-icons/ci';


// const Header = ({ toggleDarkMode, darkMode }) => {
//   return (
//     <div className='shadow-indigo-500/50 shadow-xl sticky top-0 z-10'>
//       <div className={` flex h-16 ${darkMode ? "bg-amber-300" : "bg-amber-200"} items-center justify-between transition-colors duration-300 `}>
//         <h1 className={`ml-10 text-xl ${darkMode ? "text-white" : "text-black"} transition-colors duration-300 `}>Where is the Country ?</h1>
//         <div className='mr-10 flex items-center gap-3 text-lg cursor-pointer'>
//           {darkMode ? <MdOutlineDarkMode
//             onClick={toggleDarkMode}
//             size={22}
//             className={`cursor-pointer transition-colors duration-300`}
//           /> : <CiLight onClick={toggleDarkMode} size={22} />}
//           <p onClick={toggleDarkMode} className={`mr-6 text-lg transition-colors duration-300 `}>{darkMode ? "Dark" : "Light"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// import React from 'react';
// import { MdOutlineDarkMode } from 'react-icons/md';
// import { CiLight } from 'react-icons/ci';

// const Header = ({ toggleDarkMode, darkMode }) => {
//   return (
//     <div className='shadow-indigo-500/50 shadow-xl sticky top-0 z-10'>
//       <div className={`flex h-16 items-center justify-between transition-colors duration-300 ${darkMode ? "bg-amber-300" : "bg-amber-200"}`}>
//         <h1 className={`ml-4 text-lg sm:text-xl ${darkMode ? "text-white" : "text-black"} transition-colors duration-300`}>Where is the Country?</h1>
//         <div className='mr-4 flex items-center gap-3 text-lg cursor-pointer'>
//           {darkMode ? (
//             <MdOutlineDarkMode
//               onClick={toggleDarkMode}
//               size={22}
//               className={`cursor-pointer transition-colors duration-300`}
//             />
//           ) : (
//             <CiLight onClick={toggleDarkMode} size={22} />
//           )}
//           <p onClick={toggleDarkMode} className={`text-lg transition-colors duration-300 ${darkMode ? "text-white" : "text-black"}`}>
//             {darkMode ? "Dark" : "Light"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;





import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useTheme } from '../context/theme';

const Header = () => {
  const { themeMode, lightMode, darkMode } = useTheme();

  const handleToggle = () => {
    if (themeMode === 'dark') {
      lightMode();
    } else {
      darkMode();
    }
  };

  return (
    <div className='shadow-indigo-500/50 shadow-xl sticky top-0 z-10'>
      <div className={`flex h-16 items-center justify-between transition-colors duration-300 ${themeMode === 'dark' ? "bg-amber-300" : "bg-amber-200"}`}>
        <h1 className={`ml-4 text-lg sm:text-xl ${themeMode === 'dark' ? "text-white" : "text-black"} transition-colors duration-300`}>Where is the Country?</h1>
        <div className='mr-4 flex items-center gap-3 text-lg cursor-pointer'>
          {themeMode === 'dark' ? (
            <MdOutlineDarkMode
              onClick={handleToggle}
              size={22}
              className={`cursor-pointer transition-colors duration-300`}
            />
          ) : (
            <CiLight
              onClick={handleToggle}
              size={22}
            />
          )}
          <p onClick={handleToggle} className={`text-lg transition-colors duration-300 ${themeMode === 'dark' ? "text-white" : "text-black"}`}>
            {themeMode === 'dark' ? "Dark" : "Light"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
