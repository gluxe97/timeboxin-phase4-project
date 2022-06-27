import React, {useState,useEffect} from "react";

function Team(){
    const [currentTeam,setCurrentTeam]=useState('');
    useEffect (()=>{
      fetch('/teams')
      .then(res => {
        if(res.ok){
          res.json().then(team => setCurrentTeam(team))
        }
      })
    },[])

    console.log(currentTeam);

    return(
        <div>
            <h1>My Team displayed here</h1>
        </div>
    )
}

export default Team;