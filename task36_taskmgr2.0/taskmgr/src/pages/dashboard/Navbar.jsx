import React, { useState } from "react";
import './Dashboard.css'
import { useNavigate } from "react-router-dom";

function Navbar({username,setTask,setRefresh}){
    const [searchKey,setSearchKey] = useState("")
    const navigate = useNavigate()
    const onSearch = (e)=>{
        setSearchKey(e.target.value)
    }
    const onSearchButton = async (e)=>{
        const toSearch = searchKey
        const token = localStorage.getItem(localStorage.getItem("name"))
        try{
            const res = await fetch(`http://localhost:3000/api/search/${toSearch}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                }
              });
              
                const data = await res.json()
                console.log(data)
                setTask(data)

        }
        catch(err){
            console.log(err)
        }
    }
    const onLogOut = (e)=>{
        localStorage.removeItem(localStorage.getItem("name"
        ))
        localStorage.removeItem("name")
        console.log("logging out")
        navigate('../')
    }

    return <>
        <h2>{username}</h2>
        <div className="search">
            <input type="text" placeholder="Enter text" id="searchInput" value={searchKey} onChange={onSearch}/>
            <button id="searchBut" onClick={onSearchButton}>Search</button>
        </div>
        <button onClick={onLogOut}>Logout</button>
    </>
}
export default Navbar