// import React from 'react';

// const CountryCard = ({ name, pop, capital, region, flag, darkMode }) => {
//   return (
//     <a href={`/country?name=${name}`}>
//       <div key={name} className='w-64'>
//         <div className='border-black border-2 overflow-hidden rounded-md'>
//           <img
//             className='w-64 h-48 object-fill'
//             src={flag}
//             alt={`Flag of ${name}`}
//           />

//           <div className={`mt-3 ml-4 mb-5`}>
//             <h2 className={`text-xl font-bold`}>{name}</h2>
//             <div className='mt-3'>
//               <p className='text-lg font-medium'>Population: <span className='text-md font-normal'>{pop}</span></p>
//               <p className='text-lg font-medium'>Capital: <span className='text-md font-normal'>{capital}</span></p>
//               <p className='text-lg font-medium'>Region: <span className='text-md font-normal'>{region}</span></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

// export default CountryCard;




import React from 'react';

const CountryCard = ({ name, pop, capital, region, flag, darkMode }) => {
  return (
    <a href={`/country?name=${name}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className="border border-gray-300 rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105">
        <img
          className="w-full h-40 object-fill "
          src={flag}
          alt={`Flag of ${name}`}
        />
        <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <p className="text-sm"><span className="font-medium">Population:</span> {pop}</p>
          <p className="text-sm"><span className="font-medium">Capital:</span> {capital}</p>
          <p className="text-sm"><span className="font-medium">Region:</span> {region}</p>
        </div>
      </div>
    </a>
  );
}

export default CountryCard;



