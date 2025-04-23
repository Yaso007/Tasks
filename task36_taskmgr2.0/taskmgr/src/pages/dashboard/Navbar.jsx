import React from "react";
import './Dashboard.css'

function Navbar({username}){
    return <>
        <h2>{username}</h2>
        <div className="search">
            <input type="text" placeholder="Enter text" id="searchInput"/>
            <button id="searchBut">Search</button>
        </div>
        <button>Logout</button>
    </>
}
export default Navbar