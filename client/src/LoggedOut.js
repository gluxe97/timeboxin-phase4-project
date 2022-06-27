import React from "react";
import {Link} from "react-router-dom";

function LoggedOut(){





    return(
        <div>
            <button>
            <Link to="/login">Login</Link>
            </button>
        </div>
    )
}

export default LoggedOut;