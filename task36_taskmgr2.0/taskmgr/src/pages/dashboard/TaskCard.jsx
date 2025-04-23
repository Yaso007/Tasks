import React from "react";
import './Dashboard.css'

export default function ({id,task,stats,username,setRefresh}){
    const deleteButton = (e)=>{
        const taskId = id;
        const token = localStorage.getItem(localStorage.getItem("name"))
        fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          }).then(async (res)=>{
            try{
                if(res.ok){
                    const data = await res.json
                    console.log(data)
                    setRefresh((r)=>!r)
                }
            }
            catch(err){
                console.log(err)
            }
          })
    }

    return <div className="task-card">
            <h5>Task ID: {id}</h5>
            <p><strong>Task:</strong> {task}</p>
            <p><strong>Status:</strong> <span class="status">{stats}</span></p>
            <p><strong>User:</strong> {username}</p>
            <button class="delete-btn" onClick={deleteButton}>Delete</button>
            <button class="update-btn">Update</button>
            <button class="complete-btn">Complete</button>
    </div>
}