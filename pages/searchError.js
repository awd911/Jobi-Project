import Head from 'next/head'
import Header from '@components/Header'
import ReactDOM from "react-dom/client";
import searchResults from "pages/searchResults";
import { Outlet } from 'react-router-dom';
import Link from "next/link"
//mport styles from '../styles/globals.css'

import {functionName} from '@components/searchScripts.js'
import {search} from '@components/searchScripts.js'
import Footer from '@components/Footer'
import {handleSubmit} from 'pages/searchResults.js'
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getStaticProps() {
  return {
    props: {
      heading: 'Jobi Search Engine',
      details: 'This response is static.',
    },
  };
}

const searchError = () => {

  const router = useRouter();
  const [searchText, setsearchText] = useState("");
  return (
    <div>
      <Head>
        <title id="title">Error Handling Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main >
      <h2 id="heading">
        An Error Has Occured
      </h2>
    <p>Error text</p>
      <div>

      <Link href="/" >
          <h2>Home &rarr;</h2>
        </Link>
      </div>
    </main>
  </div>

  )
}
export default searchError