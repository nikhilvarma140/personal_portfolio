import React from "react";
import "./Detail.css"

const Detail = ({type})=>{
    const data = {
        info:["Worked on Agile development model.",
            " Implemented Business Logic and Delivered User stories in time.",
            "Analyzed key points to improve the Performance and Refactored code accordingly.",
            " Fixing the defects after the User Acceptance Testing (UAT).",
            "Wrote Unit test cases for components using the Jest and Enzyme frameworks.",
            " Tech Stack - React Js, HTML5, SAAS, TypeScript, JavaScript, Next Js, Node Js, Graph QL, Rest API, Material UI,Git, Git Lab, Jest & Enzyme",
        ],
        courses:[
            "C, Java, Javascript","Python","Data structures & Algorithms","DBMS & SQL","Web development"
        ]
    }
    return(
    <>
    { type === "exp" &&
     <div className="detail_card">
     <div className="title">
      <h2>Experience:</h2>
     </div>
     <div className="subtitle">
        <h3>Custom Software Engineering Analyst (Accenture) (2022 oct - Present)</h3>  
     </div>
     <div className="points">
      <ul>
      {data.info.map((points,inx)=>(
                  <li key={inx}>{points}</li>
          ))}
      </ul>
         
     </div>
     {/* <div className="subtitle">
        <h3>Custom Software Engineering Associate  (Accenture) (2022 Oct - 2024 Dec)</h3>  
     </div>
     <div className="points">
      <ul>
      {data.info.map((points,inx)=>(
                  <li key={inx}>{points}</li>
          ))}
      </ul>
         
     </div> */}
  </div>}
  {
    type === "edu" &&  <div className="detail_card">
    <div className="title">
     <h2>Education:</h2>
    </div>
    <div className="subtitle">
       <h3>Bachelor of Technology (B.Tech) from Vardhaman College of Engineering</h3>  
    </div>
    <div className="subtitle">
       <h3>Computer Science and Enginnering</h3>  
    </div>
    <div className="subtitle">
       <h4>Courses</h4>  
    </div>
    <div className="points">
     <ul>
     {data.courses.map((points,inx)=>(
                 <li key={inx}>{points}</li>
         ))}
     </ul>
        
    </div>
    {/* <div className="subtitle">
       <h3>Custom Software Engineering Associate  (Accenture) (2022 Oct - 2024 Dec)</h3>  
    </div>
    <div className="points">
     <ul>
     {data.info.map((points,inx)=>(
                 <li key={inx}>{points}</li>
         ))}
     </ul>
        
    </div> */}
 </div>
  }
       

    </>)
}

export default Detail;