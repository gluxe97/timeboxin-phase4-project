import React from "react";

function LoggedIn({setCurrentUser,setIsAuthenticated,setNewUser}){

    const handleLogout = ()=>{
        fetch('logout', {method: "DELETE"})
        .then(res=>{
            if(res.ok){
                setCurrentUser(null);
                setIsAuthenticated(false);
                setNewUser(false);
            }
        })
    }
    

    return(
     <button className="log-button" onClick={handleLogout}>Logout</button>
    )
}

export default LoggedIn;