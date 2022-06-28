import { Link, Outlet } from "react-router-dom";
import React, {useState, useEffect} from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Login from "./routes/Login";
import Signup from "./Signup";
import Projects from "./routes/Projects";


function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [currentUser,setCurrentUser]=useState(null);
  const [newUser,setNewUser]=useState(true);

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

//  if(!isAuthenticated){
//      return (
//      <div>
//       {newUser ? <Signup setNewUser={setNewUser} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/> : <Login setCurrentUser={setCurrentUser}/>}
//      </div>)}

console.log(currentUser);
console.log(isAuthenticated);

  return (
    <div className="App">
      <header>
        <div className="web-name">
        <h1>Timeboxin'</h1>
        </div>
        <div className="header-clock"></div>
      </header>
      <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link to="/projects">My Projects</Link>
        <Link to="/members">Members</Link>
        <Link to="/team">My Team</Link>
      </nav>
      <div className="main-display">
        {isAuthenticated ? <LoggedIn setNewUser={setNewUser} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} /> : <LoggedOut setCurrentUser={setCurrentUser}/>}
        {isAuthenticated ? <Link to="/projects" element={<Projects/>}><button>Create a new project</button></Link> : null}
      </div>
    </div>
  );
}

export default App;
