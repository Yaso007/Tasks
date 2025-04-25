import React, { useEffect, useState } from "react";
import NWrap  from "./Nwrap";
import Navbar from "./navbar";
import TaskCreator  from "./TaskCreator";
import Filter from "./FIlter"
import './Dashboard.css'
import TaskCard from "./TaskCard";
function Dashboard(){
    const [task, setTask] = useState([{

    }])
    const [refresh,setRefresh] = useState(false)
    const token = localStorage.getItem(localStorage.getItem("name"))
    console.log("This is the token " + token)
    useEffect(()=>{
        fetch("http://localhost:3000/api/tasks", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          }).then(async (res) => {
            const data = await res.json();
            if (res.ok) {
              console.log( `successful`);
              console.log(data)
              //setLogIn(true)
              setTask(data)


            } else {
              console.error(`failed`, data);
            }
            console.log(data);
          })
          .catch(err => console.error("Fetch error:", err));

    },[refresh])
    return(
        <>
            <NWrap className="navwrapper" >
                <Navbar username={localStorage.getItem("name")} setTask={setTask} setRefresh={setRefresh}
                >
                </Navbar>
            </NWrap>
            <div className="menu">
                <TaskCreator setRefresh={setRefresh}></TaskCreator>
                <Filter setTask={setTask} setRefresh={setRefresh}></Filter>
            </div>

            {task.length > 0 ? (
        task.map((data) => (
          <TaskCard
            key={data._id}
            task={data.task}
            id={data._id}
            username={data.username}
            stats={data.stats}
            setRefresh={setRefresh}
          />
        ))
      ) : (
        <p className="noTask">No tasks available</p>
      )}
        </>
      

    )
}

export default Dashboard;