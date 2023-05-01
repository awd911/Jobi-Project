import Link from "next/link";
import * as React from "react";


export function search(){
    // Checks if field is empty

    console.log("Searchable REACHED");
    
    // location.href = "pages/searchResults";
}


export function handleSubmit(e){
    console.log ("HELLO?", e);
	localStorage.setItem("Search",e);
}