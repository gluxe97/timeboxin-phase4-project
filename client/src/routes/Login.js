import React from "react";
import "../App.css"

function Login(){



    return(
        <><div className='bold-line'></div><div className='container'>
            <div className='window'>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Welcome to Timeboxin!</div>
                    <div className='subtitle'>Before using our services you need to become a member.</div>
                    <div className='input-fields'>
                        <input type='text' placeholder='Username' className='input-line full-width'></input>
                        <input type='email' placeholder='Email' className='input-line full-width'></input>
                        <input type='password' placeholder='Password' className='input-line full-width'></input>

                    </div>
                    <div><button className='ghost-round full-width'>Create Account</button></div>
                </div>
            </div>
        </div></>
    )
}

export default Login;