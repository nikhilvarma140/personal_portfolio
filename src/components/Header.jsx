import React, { useState } from "react";
import "./header.css"; // Correct way to import global CSS
import { FaHome, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaHackerrank } from "react-icons/fa";

const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // Store which icon is hovered

  return (
    <div className="header">
      <div className="top">
        <div className="logo">Nikhil Varma</div>
        <div className="links">
          <FaGithub
            style={{
              fontSize: "2rem",
              color: hoveredIcon === "github" ? "white" : "#d6d8e1",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              transform: hoveredIcon === "github" ? "translateY(-0.25rem)": "translateY(0)"
            }}
            onClick={() => window.open("https://github.com/nikhilvarma140", "_blank")}
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
          />
          <FaLinkedin
            style={{
              fontSize: "2rem",
              color: hoveredIcon === "linkedin" ?"#0a69c9" : "#d6d8e1",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              transform: hoveredIcon === "linkedin" ? "translateY(-0.25rem)": "translateY(0)"
            }}
            onClick={() => window.open("https://www.linkedin.com/in/nikhil-varma-3b382a167/", "_blank")}
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
          />
          <IoMdMail
            style={{
              fontSize: "2rem",
              color: hoveredIcon === "mail" ? "#fe5f57" : "#d6d8e1",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              transform: hoveredIcon === "mail" ? "translateY(-0.25rem)": "translateY(0)"
            }}
            onClick={() => (window.location.href = `mailto:nikhilvarma140@gmail.com`)}
            onMouseEnter={() => setHoveredIcon("mail")}
            onMouseLeave={() => setHoveredIcon(null)}
          />
          <FaHackerrank
            style={{
              fontSize: "2rem",
              color: hoveredIcon === "rank" ? "#13813a" : "#d6d8e1",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              transform: hoveredIcon === "rank" ? "translateY(-0.25rem)": "translateY(0)"
            }}
            onClick={() => (window.open("https://www.hackerrank.com/profile/nikhilvarma140","_blank"))}
            onMouseEnter={() => setHoveredIcon("rank")}
            onMouseLeave={() => setHoveredIcon(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;