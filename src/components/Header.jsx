import React from "react";
import style from "./header.css"
import { FaHome ,FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Header = () => {
    return (
        <>
            <div className="header" style={style}>
                <div className="top">
                    <div className="logo">
                        Nikhil Varma
                    </div>
                    <div className="links">
                        <FaGithub style={{ fontSize: "2rem", color: "black", cursor: "pointer" }}/>
                        <FaLinkedin style={{ fontSize: "2rem", color: "black", cursor: "pointer" }} />
                        <IoMdMail  style={{ fontSize: "2rem", color: "black", cursor: "pointer" }}/>

                    </div>
                </div>

            </div>

        </>)
}


export default Header;