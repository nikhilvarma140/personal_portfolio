import React from "react";
import "./Detail.css"

const Detail = ()=>{
    const data = {
        info:["react","sass","redux"]
    }
    return(
    <>
        <div className="detail_card">
           <div className="title">
            <h2>Experience:</h2>
           </div>
           <div className="subtitle">
              <h3>Custom Software Engineering Analyst (Accenture) (2024 Dec - Present)</h3>  
           </div>
           <div className="points">
            <ul>
            {data.info.map((points,inx)=>(
                        <li key={inx}>{points}</li>
                ))}
            </ul>
               
           </div>
           <div className="subtitle">
              <h3>Custom Software Engineering Associate  (Accenture) (2022 Oct - 2024 Dec)</h3>  
           </div>
           <div className="points">
            <ul>
            {data.info.map((points,inx)=>(
                        <li key={inx}>{points}</li>
                ))}
            </ul>
               
           </div>
        </div>

    </>)
}

export default Detail;