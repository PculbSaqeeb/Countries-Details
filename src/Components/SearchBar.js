// import React from 'react';
// import { CiSearch } from 'react-icons/ci';

// const SearchBar = ({ setQuery, darkMode }) => {
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <div className='m-10 mt-16 relative flex justify-between'>
//       <div className='flex items-center'>
//         <CiSearch className='absolute pl-2' size={30} />
//         <input
//           onChange={handleChange}
//           className={`p-2 pl-9 border-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
//           type="text"
//           placeholder='Search'
//         />
//       </div>

//       <div>
//         <select
//           onChange={handleChange}
//           className={`w-44 p-2 border-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300 '}`}
//         >
//           <option value="">Filter by Region</option>
//           <option value="Asia">Asia</option>
//           <option value="Americas">Americas</option>
//           <option value="Europe">Europe</option>
//           <option value="Australia">Australia</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



// import React from 'react';
// import { CiSearch } from 'react-icons/ci';


// const SearchBar = ({ setQuery, darkMode }) => {
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };



//   return (
//     <div className='m-4 mt-8 md:mt-16 md:m-10 flex flex-col md:flex-row md:justify-between'>
//       <div className='relative flex items-center mb-4 md:mb-0'>
//         <CiSearch className='absolute pl-2' size={24} />
//         <input
//           onChange={handleChange}
//           className={`w-full md:w-80 p-2 pl-9 border-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
//           type="text"
//           placeholder='Search'
//         />
//       </div>

//       <div className='flex justify-end md:justify-start'>
//         <select
//           onChange={handleChange}
//           className={`w-full md:w-44 p-2 border-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
//         >
//           <option value="">Filter by Region</option>
//           <option value="Asia">Asia</option>
//           <option value="Americas">Americas</option>
//           <option value="Europe">Europe</option>
//           <option value="Australia">Australia</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



import React from 'react';
import { CiSearch } from 'react-icons/ci';
// import { useTheme } from '../context/theme';


const SearchBar = ({ setQuery,themeMode}) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='m-4 mt-8 md:mt-16 md:m-10 flex flex-col md:flex-row md:justify-between'>
      <div className='relative flex items-center mb-4 md:mb-0'>
        <CiSearch className='absolute pl-2' size={24} />
        <input
          onChange={handleChange}
          className={`w-full md:w-80 p-2 pl-9 border-2 rounded-md transition-colors duration-300 ${themeMode==='dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
          type="text"
          placeholder='Search'
        />
      </div>

      <div className='flex justify-end md:justify-start'>
        <select
          onChange={handleChange}
          className={`w-full md:w-44 p-2 border-2 rounded-md transition-colors duration-300 ${themeMode==='dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
        >
          <option value="">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Australia">Australia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
