import '@styles/globals.css'
// import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
// import React, {useState, useEffect} from 'react'
import * as ReactDOM from 'react-dom/client';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';

import Home from 'pages'
import searchResults from './searchResults'
import jobDetails from './jobDetails'
import searchError from './searchError'
//import ReactDOM from 'react'


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default Application
// const App = () => {
//     const routes = useRoutes([
//       {path: '/', element: <Home/>},
//       {path: '/searchResults', element:<searchResults/>},
//       {path:'/jobDetails', element:<jobDetails/>},
//       {path:'/searchError', element:<searchError/>},
//     ]);
    
    
    
//     return( routes );
//   }
  
  
//   const AppWrapper = () =>{

//     if (typeof window !== "undefined") {
//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       return (
//         root.render(
//           <React.StrictMode>
//             <BrowserRouter>
//               <App />
//             </BrowserRouter>
//           </React.StrictMode>    
//         )
//         ); 
//       }
//     }
  
//   export default AppWrapper
  
    // if (typeof window !== "undefined") {
    //   const root = ReactDOM.createRoot(document.getElementById("root"));
      
    //   root.render(
    //     <React.StrictMode>
    //       <BrowserRouter>
    //         <App />
    //       </BrowserRouter>
    //     </React.StrictMode>
    //   );
    // }
  
  // return <Component {...pageProps} />
// const router = createBrowserRouter([
//   {
  //     path: "/",
  //     element: <App />,
  //     errorElement:
  //   },
  // ])

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>

// );
    /* <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchResults' element={<searchResults/>} />
        <Route path='/jobDetails' element={<jobDetails/>} />
        <Route path='/searchError' element={<searchError/>} />

  </div> */
 

  //  const root = ReactDOM.createRoot(document.getElementById('root'));
  //  root.render(<Application />);


