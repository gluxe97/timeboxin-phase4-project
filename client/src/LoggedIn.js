import React from "react";

function LoggedIn(setCurrentUser){

    const handleLogout = ()=>{
        fetch('logout', {method: "DELETE"})
        .then(res=>{
            if(res.ok){
                setCurrentUser(null)
            }
        })
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LoggedIn;