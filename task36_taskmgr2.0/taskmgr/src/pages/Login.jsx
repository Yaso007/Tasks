import React from "react";
import LoginWrapper from './LoginWrapper';
import { useState, useEffect } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";


function Login(){
    const [loggedIn,setLogIn] = useState(false)
    const [inputValue, setInputValue] = useState({
        username:'',
        password:''
    })

    const navigate = useNavigate()

    const inputValueChanged = (e)=>{
        const {name, value} = e.target;

        setInputValue((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }
        })
        //console.log(inputValue)
    }
    const buttonValueChanged = (e) => {
      console.log("you hit" + e.target)
        const { name } = e.target;
        const { username, password } = inputValue;
    
        if (!username || !password) {
          alert("Fields cannot be empty");
          return;
        }
    
        const url = name === 'login' 
          ? "http://localhost:3000/api/login"
          : "http://localhost:3000/api/register";
        if(name === 'login'){

            fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
              })
                .then(async (res) => {
                  const data = await res.json();
                  const token = data.token
                  if (res.ok) {
                    console.log(`${name} successful`);
                    setLogIn(true)
                    localStorage.setItem(`${username}`,`${token}`)
                    console.log(localStorage.getItem(username))
                    localStorage.setItem(`name`,`${username}`)
                    
                    navigate('/dashboard')
                    
                    
                

                  } else {
                    console.error(`${name} failed`, data);
                  }
                  console.log(data);
                })
                .catch(err => console.error("Fetch error:", err));

        }
        else if(name === 'register'){
            fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
              })
                .then(async (res) => {
                  const data = await res.json();
                  if (res.ok) {
                    console.log(`${name} successful`);
                    //setLogIn(true)
                

                  } else {
                    console.error(`${name} failed`, data);
                  }
                  console.log(data);
                })
                .catch(err => console.error("Fetch error:", err));

        }
    
      };
      

    return(
        <div className="loginPage">
            <h1>Task Manager</h1>
        <LoginWrapper>
            <input type="text" placeholder="Enter username or email" name="username" required onChange={inputValueChanged}/>
            <input type="text" placeholder="Enter password" name="password" required onChange={inputValueChanged}/>
            <button name="login" onClick={buttonValueChanged}>Login</button>
            <button name='register' onClick={buttonValueChanged}>Register</button>
        </LoginWrapper>
        {
            (loggedIn)?<h1>Login successful</h1>:null
        }
        </div>
        
    )
}

export default Login;