
// import React, { useState, useEffect } from 'react';
// import { IoArrowBackOutline } from 'react-icons/io5';
// import { useLocation, Link } from 'react-router-dom';
// import Header from './Header';
// import Shim1 from './Shim1';

// const CountryDetails = () => {
//   const location = useLocation();
//   const countryName = new URLSearchParams(location.search).get('name');

//   const [country, setCountry] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCountryDetails = async () => {
//       try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//         const [data] = await response.json();

//         const borderNames = await Promise.all(
//           (data.borders || []).map(async (border) => {
//             const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//             const [borderData] = await borderResponse.json();
//             return borderData.name.common;
//           })
//         );

//         setCountry({
//           flag: data.flags.png,
//           name: data.name.common,
//           nativeName: Object.values(data.name.nativeName)[0]?.common || {},
//           population: data.population.toLocaleString(),
//           region: data.region,
//           subregion: data.subregion || 'N/A',
//           capital: data.capital?.[0] || 'N/A',
//           currencies: Object.values(data.currencies).map((cur) => cur.name).join(', '),
//           languages: Object.values(data.languages).join(', '),
//           area: data.area.toLocaleString(),
//           tld: data.tld.join(', '),
//           borders: borderNames,
//         });
//       } catch (error) {
//         console.error('Error fetching country details:', error);
//       }finally {
//         setLoading(false);
//       }
//     };

//     fetchCountryDetails();
//   }, [countryName]);

//   if(loading){
//     return <Shim1/>
//   }

//   return (
//     <div>
//       <Header />
//       <Link to="/" className="flex items-center gap-1 p-1 w-20 h-8 border-2 mt-20 ml-16 border-black rounded-md">
//         <IoArrowBackOutline />
//         <p>Back</p>
//       </Link>

//       {country && (
//         <div className="flex mt-28 gap-20 ml-32">
//           <div>
//             <img className="w-96 h-64 object-cover" src={country.flag} alt={country.name} />
//           </div>

//           <div className='w-60'>
//             <div className='w-80'>
//             <div className="text-3xl font-bold ">
//               <h2>{country.name}</h2>
//             </div>
//             <ul className="text-lg font-medium mt-7 ">
//               <li>Native Name: <span className="text-md font-normal">{country.nativeName}</span></li>
//               <li>Population: <span className="text-md font-normal">{country.population}</span></li>
//               <li>Region: <span className="text-md font-normal">{country.region}</span></li>
//               <li>Sub Region: <span className="text-md font-normal">{country.subregion}</span></li>
//               <li>Capital: <span className="text-md font-normal">{country.capital}</span></li>
//             </ul>
//             </div>
//             <div className="text-lg font-medium mt-7">
//               Border Countries: {Array.isArray(country.borders) && country.borders.length > 0 ? (
//                 country.borders.map((border, index) => (
//                   <Link key={index} to={`/country?name=${border}`} className="mr-2 text-blue-500 border-2 border-zinc p-1">
//                     {border}
//                   </Link>
//                 ))
//               ) : (
//                 <span className="text-gray-500">None</span>
//               )}
//             </div>
//           </div>

//           <div className='w-96 h-[12em]'>
//             <ul className="text-lg font-medium mt-16">
//               <li>Area: <span className="text-md font-normal">{country.area}</span></li>
//               <li>Top Level Domain: <span className="text-md font-normal">{country.tld}</span></li>
//               <li>Currencies: <span className="text-md font-normal">{country.currencies}</span></li>
//               <li>Languages: <span className="text-md font-normal">{country.languages}</span></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountryDetails;



import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import Shim1 from './Shim1';
import { useTheme } from '../context/theme';

const CountryDetails = () => {
  const location = useLocation();
  const countryName = new URLSearchParams(location.search).get('name');

  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const { themeMode } = useTheme();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const [data] = await response.json();
        console.log(data);

        const borderNames = await Promise.all(
          (data.borders || []).map(async (border) => {
            const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
            const [borderData] = await borderResponse.json();
            return borderData.name.common;
          })
        );

        setCountry({
          flag: data.flags.png,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0]?.common || {},
          population: data.population.toLocaleString(),
          region: data.region,
          subregion: data.subregion || 'N/A',
          capital: data.capital?.[0] || 'N/A',
          currencies: Object.values(data.currencies).map((cur) => cur.name).join(', '),
          languages: Object.values(data.languages).join(', '),
          area: data.area.toLocaleString(),
          tld: data.tld.join(', '),
          borders: borderNames,
        });
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (loading) {
    return <Shim1 />;
  }

  return (
    <div className={`${themeMode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      {/* <Header /> */}
      <Link to="/" className="flex items-center gap-1 p-1 w-20 h-8 mt-4 ml-4 sm:mt-20 sm:ml-16 border-black rounded-md">
        <div className={`flex items-center gap-2 border-2 border-black px-2 py-1 w-full rounded ${themeMode === 'dark' ? "bg-slate-600" : ""}`}>
          <IoArrowBackOutline />
          <p>Back</p>
        </div>
      </Link>

      {country && (
        <div className="flex flex-col md:flex-row mt-10 sm:mt-28 gap-6 sm:gap-20 px-4 sm:px-16 lg:px-32 h-screen">
          <div className="flex-shrink-0">
            <img className="w-full max-w-md h-auto object-fill shadow-md" src={country.flag} alt={country.name} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20 w-full">
            <div className="flex-1">
              <h2 className="text-3xl font-bold">{country.name}</h2>
              <ul className="text-lg font-medium mt-7 ">
                <li>Native Name: <span className="text-md font-normal">{country.nativeName}</span></li>
                <li>Population: <span className="text-md font-normal">{country.population}</span></li>
                <li>Region: <span className="text-md font-normal">{country.region}</span></li>
                <li>Sub Region: <span className="text-md font-normal">{country.subregion}</span></li>
                <li>Capital: <span className="text-md font-normal">{country.capital}</span></li>
              </ul>
              <div className="text-lg font-medium mt-7 ">
                Border Countries: {Array.isArray(country.borders) && country.borders.length > 0 ? (
                  country.borders.map((border, index) => (
                    <Link key={index} to={`/country?name=${border}`} className=" text-blue-500 border-2 border-zinc-200 px-2 rounded-md ml-2">
                      {border}
                    </Link>
                  ))
                ) : (
                  <span className="text-gray-500">None</span>
                )}
              </div>
            </div>

            <div className="flex-1">
              <ul className="text-lg font-medium mt-7 ">
                <li>Area: <span className="text-md font-normal">{country.area}</span></li>
                <li>Top Level Domain: <span className="text-md font-normal">{country.tld}</span></li>
                <li>Currencies: <span className="text-md font-normal">{country.currencies}</span></li>
                <li>Languages: <span className="text-md font-normal">{country.languages}</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default CountryDetails;


// import React, { useState, useEffect } from 'react';
// import { IoArrowBackOutline } from 'react-icons/io5';
// import { useLocation, Link } from 'react-router-dom';
// import Header from './Header';
// import Shim1 from './Shim1';
// import { useTheme } from '../context/theme'; // Correctly import useTheme

// const CountryDetail = () => { // Ensure component name matches import in router
//   const location = useLocation();
//   const countryName = new URLSearchParams(location.search).get('name');
//   const { themeMode } = useTheme(); // Destructure themeMode from useTheme

//   const [country, setCountry] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCountryDetails = async () => {
//       try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//         const [data] = await response.json();

//         const borderNames = await Promise.all(
//           (data.borders || []).map(async (border) => {
//             const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//             const [borderData] = await borderResponse.json();
//             return borderData.name.common;
//           })
//         );

//         setCountry({
//           flag: data.flags.png,
//           name: data.name.common,
//           nativeName: Object.values(data.name.nativeName)[0]?.common || {},
//           population: data.population.toLocaleString(),
//           region: data.region,
//           subregion: data.subregion || 'N/A',
//           capital: data.capital?.[0] || 'N/A',
//           currencies: Object.values(data.currencies).map((cur) => cur.name).join(', '),
//           languages: Object.values(data.languages).join(', '),
//           area: data.area.toLocaleString(),
//           tld: data.tld.join(', '),
//           borders: borderNames,
//         });
//       } catch (error) {
//         console.error('Error fetching country details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCountryDetails();
//   }, [countryName]);

//   if (loading) {
//     return <Shim1 />;
//   }

//   return (
//     <div className={`${themeMode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
//       <Header />
//       <Link to="/" className="flex items-center gap-1 p-1 w-20 h-8 border-2 mt-4 ml-4 sm:mt-20 sm:ml-16 border-black rounded-md">
//         <IoArrowBackOutline />
//         <p>Back</p>
//       </Link>

//       {country && (
//         <div className="flex flex-col md:flex-row mt-10 sm:mt-28 gap-6 sm:gap-20 px-4 sm:px-16">
//           <div className="flex-shrink-0">
//             <img className="w-full h-auto max-w-md object-cover rounded-md" src={country.flag} alt={country.name} />
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 md:gap-20 w-full">
//             <div className="flex-1">
//               <div className="text-3xl font-bold">
//                 <h2>{country.name}</h2>
//               </div>
//               <ul className="text-lg font-medium mt-7 space-y-2">
//                 <li>Native Name: <span className="text-md font-normal">{country.nativeName}</span></li>
//                 <li>Population: <span className="text-md font-normal">{country.population}</span></li>
//                 <li>Region: <span className="text-md font-normal">{country.region}</span></li>
//                 <li>Sub Region: <span className="text-md font-normal">{country.subregion}</span></li>
//                 <li>Capital: <span className="text-md font-normal">{country.capital}</span></li>
//               </ul>
//               <div className="text-lg font-medium mt-7">
//                 Border Countries: {Array.isArray(country.borders) && country.borders.length > 0 ? (
//                   country.borders.map((border, index) => (
//                     <Link key={index} to={`/country?name=${border}`} className="mr-2 text-blue-500 border-2 border-zinc-200 p-1 rounded-md">
//                       {border}
//                     </Link>
//                   ))
//                 ) : (
//                   <span className="text-gray-500">None</span>
//                 )}
//               </div>
//             </div>

//             <div className="flex-1">
//               <ul className="text-lg font-medium mt-7 space-y-2">
//                 <li>Area: <span className="text-md font-normal">{country.area}</span></li>
//                 <li>Top Level Domain: <span className="text-md font-normal">{country.tld}</span></li>
//                 <li>Currencies: <span className="text-md font-normal">{country.currencies}</span></li>
//                 <li>Languages: <span className="text-md font-normal">{country.languages}</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountryDetail;

