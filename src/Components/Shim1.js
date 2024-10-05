// import React from 'react'

// export default function Shim1() {
//     return (
//         <div className="flex gap-20 ml-32 mt-72">
//             <div className="h-64 w-96 bg-slate-300 rounded-md flex"></div>
//             <div className="">
//                 <div className=" mt-8">
//                     <p className=' mb-6 w-64 h-10 bg-slate-300 rounded-md'></p>
//                     <p className='mb-2 w-64 h-10 bg-slate-300 rounded-md'></p>
//                     <p className='mb-2 w-64 h-10 bg-slate-300 rounded-md'></p>
//                     <p className='mb-2 w-32 h-10 bg-slate-300 rounded-md'></p>
//                 </div>
                
//             </div>

//             <div className="mt-24">
//                     <p className='mb-2 w-64 h-10 bg-slate-300 rounded-md'></p>
//                     <p className='mb-2 w-64 h-10 bg-slate-300 rounded-md'></p>
//                     <p className='mb-2 w-32 h-10 bg-slate-300 rounded-md'></p>
//                 </div>
//         </div>
//     )
// }



// import React from 'react';

// const Shim1 = () => {
//   return (
//     <div className="flex flex-col md:flex-row gap-6 md:gap-20 px-4 sm:px-16 mt-32 sm:mt-72">
//       <div className="h-44 w-full max-w-md bg-slate-300 rounded-md"></div>
//       <div className="flex-1">
//         <div className="mt-8 space-y-2">
//           <div className="w-64 h-10 bg-slate-300 rounded-md mb-6"></div>
//           <div className="w-64 h-10 bg-slate-300 rounded-md"></div>
//           <div className="w-64 h-10 bg-slate-300 rounded-md"></div>
//           <div className="w-32 h-10 bg-slate-300 rounded-md"></div>
//         </div>
//       </div>
//       <div className="flex-1 mt-24 space-y-2">
//         <div className="w-64 h-10 bg-slate-300 rounded-md"></div>
//         <div className="w-64 h-10 bg-slate-300 rounded-md"></div>
//         <div className="w-32 h-10 bg-slate-300 rounded-md"></div>
//       </div>
//     </div>
//   );
// };

// export default Shim1;



import React from 'react';

const Shim1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 mt-40 sm:mt-60 lg:mt-48 animate-pulse">
      <div className="h-64 w-full  max-w-lg bg-slate-300 dark:bg-slate-400 rounded-md"></div>
      <div className="flex-1 mt-8 md:mt-0">
        <div className="space-y-4">
          <div className="w-64 h-8 bg-slate-300 dark:bg-slate-400 rounded-md mb-4"></div>
          <div className="w-full h-8 max-w-md bg-slate-300 dark:bg-slate-400 rounded-md"></div>
          <div className="w-full h-8 max-w-md bg-slate-300 dark:bg-slate-400 rounded-md"></div>
          <div className="w-32 h-8 bg-slate-300 dark:bg-slate-400 rounded-md"></div>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 space-y-4">
        <div className="w-full h-8 max-w-md bg-slate-300 dark:bg-slate-400 rounded-md"></div>
        <div className="w-full h-8 max-w-md bg-slate-300 dark:bg-slate-400 rounded-md"></div>
        <div className="w-32 h-8 bg-slate-300 dark:bg-slate-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default Shim1;

