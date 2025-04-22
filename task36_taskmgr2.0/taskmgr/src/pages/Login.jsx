import React from "react";
import LoginWrapper from './LoginWrapper';
import '../App.css'
function Login(){
    return(
        <div className="loginPage">
            <h1>Task Manager</h1>
        <LoginWrapper>
            <input type="text" placeholder="Enter username or email" required/>
            <input type="text" placeholder="Enter password" required/>
        </LoginWrapper> 
        </div>
        
        
        
    )
}

export default Login;