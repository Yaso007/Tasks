import React from "react";
import './Dashboard.css'
 function NWrap({children}){
    return <div className="navwrapper">
        {children}
    </div>
}
export default NWrap;