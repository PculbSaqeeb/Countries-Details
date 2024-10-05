// import React from 'react';
// import './Shim.css';

// const Shim = () => {
//   return (
//     <div className="shimmer-container">
//       {Array.from({ length: 10 }).map((_, index) => (

        

//         <div key={index} className="shimmer">
//           <div className='ml-2'>
//             <div className='w-60 h-48 mt-2 bg-zinc-400 rounded-md '></div>
//             <div className='w-60 h-9  bg-zinc-400 rounded-md mt-5 mb-2'></div>
//             <div className='w-60 h-9 bg-zinc-400 rounded-md  mb-2'></div>
//             <div className='w-60 h-9 bg-zinc-400 rounded-md mb-2'></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shim;



import React from 'react';

const Shim = () => {
  return (
    <div className="flex flex-wrap gap-6 p-4 sm:gap-8 sm:p-8 md:gap-10 md:p-10 lg:gap-12 lg:p-12 justify-center">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="animate-pulse w-64 mt-2 mr-4">
          <div className='bg-gray-300 dark:bg-gray-700 w-full h-48 rounded-md'></div>
          <div className='mt-4 bg-gray-300 dark:bg-gray-700 w-full h-6 rounded-md'></div>
          <div className='mt-2 bg-gray-300 dark:bg-gray-700 w-full h-6 rounded-md'></div>
          <div className='mt-2 bg-gray-300 dark:bg-gray-700 w-full h-6 rounded-md'></div>
        </div>
      ))}
    </div>
  );
};

export default Shim;
