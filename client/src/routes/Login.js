import React, {useState} from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Signup from "../Signup";


function Login({setCurrentUser}){

const [formData,setFormData]=useState({
    username: "",
    password: ""});

   

    const handleChange = (e)=>{

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    function handleSubmit(e){
        e.preventDefault();

        const userCreds = {...formData};
        console.log(userCreds)

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then ((res)=>{
            if (res.ok) {
                res.json().then((user)=>{
                    console.log(user);
                    setCurrentUser(user);

                });
            } else {
                res.json().then((errors)=>{
                    console.log(errors);
                });
            }
        });
    }

    
    console.log(formData);
    
    return( 
        
        <form >
            <div className='bold-line'></div><div className='container'>
            <div className='window'>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Welcome back!</div>
                    <div className='subtitle'>Login to continue</div>
                    <div className='input-fields'>
                        <input onChange={handleChange} name="username" type='text' placeholder='Username' className='input-line full-width' value={formData.username}></input>
                        <input onChange={handleChange} name="password" type='password' placeholder='Password' className='input-line full-width' value={formData.password}></input>
                    </div>
                    <div><button onClick={handleSubmit} className='ghost-round full-width'>Login</button></div>
                    <h3>Don't have an account?</h3>
                    <Link to="/signup" element={<Signup/>}>
                        <div><button className='ghost-round full-width'>Signup</button></div>
                    </Link>
                </div>
            </div>
        </div>
        </form>

    )
}

export default Login;