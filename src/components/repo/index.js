import React, { useState, useEffect } from "react";
import './style.css'


const Repo=({user, anArray})=>{

    const showInfo = () => {
        const info = document.getElementsByClassName("information")
        console.log(info)
        console.log("hello")
        for(let piece of info){
        if(piece.style.display == "none"){
            piece.style.display = "block"
        }
        else{
            piece.style.display = "none"
        }
    }
    }
    
    
    const setDiv = anArray.map((repo)=>{
        console.log(window.location.pathname)  
       return(
           <> 
        <div key={repo.id} class="card">
        
        <h1 > {repo.name} </h1>
        <button onClick={showInfo} class="btn btn-primary btn-lg" >Show Info</button>
       
        
        <div class="information">
        <p>Full name: {repo.full_name}</p>
        <p>Forks: {repo.forks}</p>
        <p>Stargazers: {repo.stargazers_count}</p>
        </div>
        </div>
        </>
   )     
    }
    )
    console.log(user)


    

    return(
    
        <div>
              <ul>
                {setDiv}
              </ul>


        </div>

    )
        
}
// )
// }
    



//name, fullname, html_url, forks, description, count, stargazers


export default Repo;

// const songItems = songsInfo.map((song) =>{
//     return(
//     <>
//     <h1 key={song.index}> {song.name}</h1>
//      <img src={song.imgurl} />
//      <LikeButton />

//      </>
//  ) })