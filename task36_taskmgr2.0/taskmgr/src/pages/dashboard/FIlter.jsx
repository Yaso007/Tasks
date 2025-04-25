import React from "react";
import './Dashboard.css'
import { useState } from "react";
export default function Filter({setTask,setRefresh}){

    const [buttonState,setButtonState] = useState({
        All:false,
        Pending:false,
        Complete:false
    })

    const onAll =(e)=>{
        setRefresh((r)=>!r)
        setButtonState(()=>{
            return({
                All: true,
                Pending: false,
                Complete:false
            })
        })
    }
    const onPending = async (e)=>{
        try{
            const status = "Pending"
            const globalUser = localStorage.getItem("name")
            const token = localStorage.getItem(globalUser)
            const response = await fetch(`http://localhost:3000/api/filter`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({
                    globalUser,status
                })
              })
            if(response.ok){
                const data = await response.json()
                setTask(data)
                setButtonState(()=>{
                    return({
                        All: false,
                        Pending: true,
                        Complete:false
                    })
                })
                console.log(data)
            
                
            }
        }
        catch(e){
            console.log(e)
        }
    
    }
    const onComplete = async (e)=>{
        try{
            const status = "Completed"
            const token = localStorage.getItem(localStorage.getItem("name"))
            const globalUser = localStorage.getItem("name")
            const response = await fetch(`http://localhost:3000/api/filter`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({
                    globalUser,status
                })
              })
            if(response.ok){
                const data = await response.json()
               setTask(data)
               setButtonState(()=>{
                return({
                    All: false,
                    Pending: false,
                    Complete:true
                })
            })
            }
            
        }
        catch(e){
            console.log(e)
        }
    }

    return <div className="filter">
    <button onClick={onAll} className={buttonState.All?"turnedOn":''}>All</button>
    <button onClick={onPending} className={buttonState.Pending?"turnedOn":''}>Pending</button>
    <button onClick={onComplete} className={buttonState.Complete?"turnedOn":''}>Completed</button>
    </div>
    
    
}
