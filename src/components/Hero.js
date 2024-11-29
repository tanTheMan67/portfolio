import { useEffect, useState } from "react";
import { Img } from "../constants";
import { leet } from "../constants";
import { linkedin } from "../constants";
import { github } from "../constants";
import { CV } from "../constants";
const Hero = ()=>{
    const [isNight,setIsNight]=useState(true);
    
    const  toggletheme = ()=>(
        setIsNight(!isNight)
    )
    useEffect(()=>{ if(isNight) {
        document.body.classList.add("night");
      } else {
        document.body.classList.remove("night");
      }},[isNight]);
    return(
    <section id="hero">
        <div>
            <img src={Img} className="hero-img" alt="tanish"></img>
        </div>
        <div className="info">
            <h1>Tanish Kumar</h1>
            <h2>Front End Developer</h2>
            <div className="links">
            <span>
                < a href="https://leetcode.com/u/tanish67/" target="_blank">
                <img className="img" src={leet}></img>
                </a>
            </span>
            <span>
                < a  href="https://www.linkedin.com/in/tanish-kumar-731a87235/" target="_blank">
                <img className="img" src={linkedin}></img>
                </a>
            </span>
            <span>
                < a href="https://github.com/tanTheMan67/" target="_blank">
                <img className="img" src={github}></img>
                </a>
            </span>
            </div>
            <p>Passionate To develop intractive websites using Reactjs.</p>
            <p>proficient in Nodejs and Reactjs</p>
            <a href={CV} download>
                <button className="btn">Resume</button>
            </a>
            {!isNight && <div onClick={toggletheme} className="toggle-btn">☀️</div>}
            {
              isNight && <div className="toggle-btn" onClick={toggletheme} >🌙</div>
}
            </div>
    </section>
    )
}
export default Hero;