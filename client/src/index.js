import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './routes/Projects';
import Login from './routes/Login';
import Team from './routes/Team';
import Signup from './Signup';
import Members from './Members';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/members" element={<Members/>}/>
    <Route path="/team" element={<Team/>}/>
  </Routes>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
