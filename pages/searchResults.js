import React from "react";
//import styles from '../styles/globals.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';


import {Search, submitID} from 'components/searchScripts.js'
import { render } from "react-dom";
import getJobs from "firebase_setup/firebase"

const searchResults = () =>{

    const [searchParams,setSearchParams] = useSearchParams({});
    const [info , setInfo] = useState();
    //const [info , setInfo] = useState([{Job}]);
    const jobsDB = [new Job];
    const [pageUrl,setPageURL] = useState();
    const totalDb =  getJobs();

    //creates the router to access the current URL
    const router = useRouter()
    
    function Job(id, title, location,type,wage,description) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.type = type;
        this.wage = wage;
        this.description = description;
      }



    useEffect(()=>{
        Fetchdata();
        setPageURL(searchParse(router.asPath).replaceAll('+'," ").replaceAll("%28",'(').replaceAll("%29",')'));
    },[])

    const Fetchdata = ()=>{
        
        
        const searchString = (searchParse(router.asPath).replaceAll('+'," ").replaceAll("%28",'(').replaceAll("%29",')'));;

        const allJobs = Promise.resolve(totalDb).then(jobs=>{
            //Adds the jobs from the database to the jobsDB array of job objects
            //console.log ("PrintData: ",jobs);
            jobs.forEach(element => {
                
                //creates a job object from each job in the database
                let currJob = new Job(element.id,element.title,element.location,element.type,element.wage,element.description);

                console.log (searchString, " - COMPARE - ",element.title," Result: ",(searchString === element.title) )
   
                setInfo(jobs);

                // Pushes the Jobs into the Info Array of Job objects

            })
        })

        console.log("FetchData reached, Info: ",info," Info length (How many Jobs)", info?.length);

     }

     //Splits the query into the actual search terms
        function searchParse(query){
            query = query.split("=");

            return query[1];
        }

    return(
        <div >
            <h2>Search Results Page</h2>
 			<h3>Job Details</h3>
            <p>
            User input: {pageUrl}<br />
            {info?.length}
            </p>

        

 		{
            //Checks if the search term is in the title
            // can be changed by altering the title to location and having a variable tied to a radio button passed in on the index page
                info?.filter((item)=>item.title.toLowerCase().includes(pageUrl.toLowerCase())).map((data) => {
                    return(

                        <Frame id={data.id} title={data.title} location={data.location}/>
                    )
                    })
		}


        <Link href="/" >
          <h2>Home &rarr;</h2>
        </Link>
        </div>


)
}

 // Define how each display entry will be structured
 const Frame = ({id,title , location}) => {
    
    const searchParams = new URLSearchParams();
    searchParams.set("id",id.toString());
    //const jobId = URLSearchParams.set("id",id);
    //setSearchParams(searchParams);

    return (
 		<center>
 			<div className="div">
                <Link href= {{pathname: '/jobDetails', query:{ id: searchParams.get("id")}}}>
                    <h2>{title} &rarr;</h2>
                </Link>
            <p>Location : {location}</p>

 	        </div>
 	    </center>
 	);
}
export default searchResults