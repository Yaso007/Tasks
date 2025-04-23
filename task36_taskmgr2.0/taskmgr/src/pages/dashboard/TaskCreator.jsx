import React from "react";
import './Dashboard.css'
import { useState } from "react";
import { set } from "mongoose";

export default function TaskCreator({setRefresh}){
    const [input, setInput] = useState("")

    const handleInput = (e)=>{
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const handleButton = (e)=>{
        const task = input
        const token = localStorage.getItem(localStorage.getItem("name"))
        const username = localStorage.getItem("name")

        fetch("http://localhost:3000/api/tasks",{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,task})

            
        }).then(async (res)=>{
            try{
                if(res.ok){
                    const data = await res.json()
                    setRefresh((r)=>!r)
                    console.log(data)
                    setInput("")
                }
                else{
                    console.log("Failed to create task")
                }
            }
            catch(err){
                console.log(err)
            }
      
        })
    }

    return <div id="taskCreator">
   <input type="text" placeholder="Create Task" onChange={handleInput} value={input}/>
   <button onClick={handleButton}>Create</button>
    </div>
     
    
}