import React from "react";
import {Link} from "react-router-dom";

function LoggedOut(){





    return(
        <button className="log-button">
          <Link to="/login">Login</Link>
        </button>
    )
}

export default LoggedOut;