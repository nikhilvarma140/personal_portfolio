import React from "react";
import "./card.css"

import image from "./../assets/image.jpeg"
import profile1 from "./../assets/profile2.jpeg"
const Card = ()=>{
    return(<>
    <div className="card">
        <div className="img_wrapper">
            <img src={profile1} alt="alt" />
        </div>
        <div className="text_desc">
            I am a front-end developer. I worked as ReactJS developer and I have relevant skills like SASS, NextJS, Git,GitLab,Axios, Material-UI, TypeScript and NodeJS
            </div>
    </div>
    </>);
}

export default Card;