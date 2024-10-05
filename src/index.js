
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CountryDetail from './Components/CountryDetail';
// import { ThemeProvider } from './context/theme'; 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/country',
//     element: <CountryDetail />
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </React.StrictMode>
// );

// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CountryDetail from './Components/CountryDetail';
import { ThemeProvider } from './context/theme'; 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/country',
//     element: <CountryDetail />
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

