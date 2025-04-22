import React from "react";
import '../App.css'

function LoginWrapper({children}){
    return (<div className="loginWrapper">
        {children}
    </div>)
}
export default LoginWrapper;