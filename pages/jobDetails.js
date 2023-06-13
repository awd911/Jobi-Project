import Head from 'next/head'
import Header from '@components/Header'
import ReactDOM from "react-dom/client";
import searchResults from "pages/searchResults";
import { Outlet } from 'react-router-dom';
import Link from "next/link"
import getJobs from "firebase_setup/firebase"
import {Job} from 'pages/searchResults.js'

//mport styles from '../styles/globals.css'

import {search} from '@components/searchScripts.js'
import Footer from '@components/Footer'
import searchParse from 'pages/searchResults.js'
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

export async function getStaticProps() {
  return {
    props: {
      heading: 'Jobi Search Engine',
      details: 'This response is static.',
    },
  };
}


const jobDetails = () => {

  const jobDb =  getJobs();
  const [jobPage , setJobPage] = useState();
  const router = useRouter();
  const [searchText, setsearchText] = useState("");

  const searchRes = useSearchParams();

  
  // let searchId = (router.asPath.split("="));
  // searchId.shift();
  // searchId = searchId[0];

  // console.log("Search ID : ",searchId);

  const jobList = Promise.resolve(jobDb).then(jobTotal=>{
      //Loads the entire DB in order to search by ID
      jobTotal.forEach(element => {

          //Searches by ID and sets the JobPage information
          if(searchRes.get('id') === element.id){
            setJobPage(element);
          }


      })
  })

  // console.log("JobPage reached, jobPage: ",jobPage," Info length (How many Jobs)", jobPage?.length);

  return (
    <div>
      <Head>
        <title id="title">Job Details</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles\jobDetails.css"></link>
      </Head>

    <main>
        <Link href="/" >
          <h2>Home &rarr;</h2>
        </Link>
      <h2 id="heading">
        Title: {jobPage?.title}
      </h2>
        <h3>
          Location: {jobPage?.location}
        </h3>
        <br></br>
        <div className='card'>
          <div className='posWage'>
          This is a  {jobPage?.type} position
          <br></br>
          {jobPage?.wage}$ annual
          </div>
        <br></br>
        Description: {jobPage?.description}
      </div>
    </main>
  </div>

  )
}
export default jobDetails