import React,{useState} from "react";
import "./card.css"
import PhoneIcon from "@mui/icons-material/Phone";
import { IoMdMail } from "react-icons/io";
import { ImProfile } from "react-icons/im";


import image from "./../assets/image.jpeg"
import profile1 from "./../assets/profile3.jpeg"
import profile from "./../assets/profile3_color.jpeg"
const Card = ()=>{
    const [color,setColor] = useState(false)
    const resumeLink  = '12lYXkgFWUJvCzeUkcaKerNAFwFlBTnWb';
    const driveLink = `https://drive.google.com/uc?export=download&id=${resumeLink}`;
    return(<>
    <div className="card">
        <div className="img_wrapper" onMouseEnter={()=> setColor(true)} onMouseOut={()=>setColor(false) }>
            <img src= { color? profile:profile1} alt="alt" />
        </div>
        <div className="text_desc">
        Frontend React.js Developer with 2.5 years of experience in building dynamic and responsive web applications.
Proficient in React.js, Next.js, JavaScript, and modern frontend technologies.
        </div>
        <div className="call">
        <a href="tel:+918330911066" style={{ textDecoration: "none", color: "#d6d8e1" }}>
            <PhoneIcon style={{ color: "#d6d8e1",cursor:"pointer" }}  onClick = {()=>{window.location.href = `tel:+918330911066`}}/>
            
        +91 8330911066
      </a>
        </div>
        <div className="call">
        <a href="mailto:nikhilvarma140@gmail.com" style={{ textDecoration: "none", color: "#d6d8e1" }}>
        <IoMdMail
            style={{
              fontSize: "2rem",
              color:  "#d6d8e1",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = `mailto:nikhilvarma140@gmail.com`)}
           
          />
            
        nikhilvarma140@gmail.com
      </a>
        </div>
        <div className="call">
        <a href={driveLink} style={{ textDecoration: "none", color: "#d6d8e1" }} download={"nikhil_resume.pdf"}>
        <ImProfile
            style={{
              fontSize: "2rem",
              color:  "#d6d8e1",
              cursor: "pointer",
            }}
            onClick={() => (driveLink)}
           
          />
          Download Resume
          </a>
        </div>

    </div>
    </>);
}

export default Card;