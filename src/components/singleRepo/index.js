import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";


const SingleRepo = ({anArray, user}) => {

    const pathname = window.location.pathname

    console.log(user)
    for(repo in anArray) {
        console.log(repo)
        // if (pathname === "/"+{repo}){

        // }
    }

     

        //     else{
        //         console.log("AGain")
        //         return(
        //             <div className="card">
        //                 <h1>Sorry no information has been found</h1>
        //             </div>
        //         )
        //     }
        // }
        // catch(err){
        //     console.log(err)
        // }
        // }
   
        

        return (
            <h1>Hello</h1>
        )

    }


    export default SingleRepo;