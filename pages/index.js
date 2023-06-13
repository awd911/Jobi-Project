import Head from 'next/head'
import Header from '@components/Header'
import ReactDOM from "react-dom/client";
import searchResults from "pages/searchResults";
import { BrowserRouter, Outlet } from 'react-router-dom';
import Link from "next/link"
//mport styles from '../styles/globals.css'

import {functionName} from '@components/searchScripts.js'
import {search} from '@components/searchScripts.js'
import Footer from '@components/Footer'
import {handleSubmit} from 'pages/searchResults.js'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Application from './_app';

// export async function getStaticProps() {
//   return {
//     props: {
//       heading: 'Jobi Search Engine',
//       details: 'This response is static.',
//     },
//   };
// }
//const router = useRouter();

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
//const [searchText, setsearchText] = useState("");


const Home = () => {
  return (
    <div>
      <Head>
        <title id="title">Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main >
      <h2 id="heading">
        Search Results...
      </h2>

      <div>

    <form action="/searchResults" method="GET">
        <input type="text" id="keyword" name="keyword" placeholder="Search..."></input>
        <button type="submit" id="submit">Search</button>
    </form>
      </div>
    </main>
    <Link href="/searchError" >
          <h2>ErrorScreen &rarr;</h2>
        </Link> 

  </div>

  )
}
export default Home