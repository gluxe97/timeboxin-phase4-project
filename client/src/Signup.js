import React, {useState} from "react";

function Signup({setCurrentUser,setIsAuthenticated}){
    const[formData,setFormData]=useState({
        username: "",
        name: "",
        password: "",
        team: "",
        project: ""});

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }; 

    function handleSubmit(e){
        e.preventDefault();

        const userCreds = {...formData};
        console.log(userCreds)

        fetch("/members", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then ((res)=>{
            if (res.ok) {
                res.json().then((user)=>{
                    setCurrentUser(user)
                    setIsAuthenticated(true);
                });
            } else {
                res.json().then((errors)=>{
                    console.log(errors);
                });
            }
        });
    }



    return(
        <form onSubmit={handleSubmit}>
            <div className='bold-line'></div><div className='container'>
            <div className='window'>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Welcome to Timeboxin!</div>
                    <div className='subtitle'>Before using our services you need to become a member.</div>
                    <div className='input-fields'>
                        <input onChange={handleChange} name="username" type='text' placeholder='Username' className='input-line full-width' value={formData.username}></input>
                        <input onChange={handleChange} name="name" type='name' placeholder='Name' className='input-line full-width' value={formData.name}></input>
                        <input onChange={handleChange} name="password" type='password' placeholder='Password' className='input-line full-width' value={formData.password}></input>
                      
                    </div>
                    <div><button className='ghost-round full-width'>Create Account</button></div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Signup;