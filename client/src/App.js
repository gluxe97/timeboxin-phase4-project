import { Link } from "react-router-dom";
import React from "react";

function App() {
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
      </nav>
    </div>
  );
}

export default App;
