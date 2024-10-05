// import React, { useState, useEffect } from 'react';
// import CountryCard from './CountryCard';
// import Shim from './Shim';

// const CountryList = ({ query, darkMode }) => {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const filteredCountries = countries.filter((country) => {
//   return  country.name.common.toLowerCase().includes(query.toLowerCase())|| country.region.toLowerCase().includes(query.toLowerCase());
//   });

//   if (!countries.length) {
//     return <Shim darkMode={darkMode} />
//   }

//   return (
//     <div className={`flex flex-wrap gap-14 ml-24 `}>
//       {filteredCountries.length > 0 ? (
//         filteredCountries.map((item, index) => (
//           <CountryCard 
            
//             key={index}
//             name={item.name.common}
//             flag={item.flags.png}
//             pop={item.population}
//             region={item.region}
//             capital={item.capital?.[0] || 'N/A'}
//           />
//         ))
//       ) : (
//         <h1 className={`text-center h-screen w-full`}>No countries found</h1>
//       )}
//     </div>
//   );
// };

// export default CountryList;



// import React, { useState, useEffect } from 'react';
// import CountryCard from './CountryCard';
// import Shim from './Shim';

// const CountryList = ({ query, darkMode }) => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const filteredCountries = countries.filter((country) => {
//     return (
//       country.name.common.toLowerCase().includes(query.toLowerCase()) ||
//       country.region.toLowerCase().includes(query.toLowerCase())
//     );
//   });


//   if (!countries.length) {
//     return <Shim darkMode={darkMode} />;
//   }

//   return (
//     <div className="flex flex-wrap gap-6 p-4 sm:gap-8 sm:p-8 md:gap-10 md:p-10 lg:gap-12 lg:p-12 justify-center">
//       {filteredCountries.length > 0 ? (
//         filteredCountries.map((item, index) => (
//           <CountryCard
//             key={index}
//             name={item.name.common}
//             flag={item.flags.png}
//             pop={item.population}
//             region={item.region}
//             capital={item.capital?.[0] || 'N/A'}
//             darkMode={darkMode}
//           />
//         ))
//       ) : (
//         <h1 className={`text-center h-screen w-full ${darkMode ? 'text-white' : 'text-black'}`}>
//           No countries found
//         </h1>
//       )}
//     </div>
//   );
// };

// export default CountryList;



import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import Shim from './Shim';

const CountryList = ({ query, darkMode }) => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data)
        setCountries((prev)=>[...prev,...data]);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [visibleCount]);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
      setVisibleCount((prev) => prev + 20); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!countries.length) {
    return <Shim darkMode={darkMode} />;
  }

  return (
    <div className="flex flex-wrap gap-6 p-4 sm:gap-8 sm:p-8 md:gap-10 md:p-10 lg:gap-12 lg:p-12 justify-center">
      {filteredCountries.length > 0 ? (
        filteredCountries.slice(0, visibleCount).map((item, index) => (
          <CountryCard
            key={index}
            name={item.name.common}
            flag={item.flags.png}
            pop={item.population}
            region={item.region}
            capital={item.capital?.[0] || 'N/A'}
            darkMode={darkMode}
          />
        ))
      ) : (
        <h1 className={`text-center h-screen w-full ${darkMode ? 'text-white' : 'text-black'}`}>
          No countries found
        </h1>
      )}
    </div>
  );
};

export default CountryList;
