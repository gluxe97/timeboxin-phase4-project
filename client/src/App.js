import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Signup from "./Signup";


function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [currentUser,setCurrentUser]=useState(null);

  useEffect (()=>{
    fetch('/me')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
        setCurrentUser(user);
        setIsAuthenticated(true);
    });
    }
  });
  },[]);
  console.log(currentUser);

  if(!isAuthenticated){
     return <Signup setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>}

  return (
    <div className="App">
      <header className="App-header">
        <h1>HomePage</h1>
      </header>
      <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link to="/projects">My Projects</Link>
        <Link to="/login">Login</Link>
        <Link to="/team">My Team</Link>
      </nav>
      <div>
      <div>
      </div>
        <div>{isAuthenticated ? <LoggedIn setCurrentUser={setCurrentUser} /> : <LoggedOut setCurrentUser={setCurrentUser}/>}</div>
      </div>
    </div>
  );
}

export default App;
