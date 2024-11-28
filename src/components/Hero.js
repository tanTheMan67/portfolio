import { Img } from "../constants";
import { leet } from "../constants";
import { linkedin } from "../constants";
import { github } from "../constants";
import { CV } from "../constants";
const Hero = ()=>(
    <section id="hero">
        <div>
            <img src={Img} className="hero-img" alt="tanish"></img>
        </div>
        <div className="info">
            <h1>Tanish Kumar</h1>
            <h2>FrontEnd Developer</h2>
            <span>
                < a href="https://leetcode.com/u/tanish67/" target="_blank">Leetcode</a>
                <img src={leet}></img>
            </span>
            <span>
                < a href="https://www.linkedin.com/in/tanish-kumar-731a87235/" target="_blank">Linkedin</a>
                <img src={linkedin}></img>
            </span>
            <span>
                < a href="https://github.com/tanTheMan67/" target="_blank">Github</a>
                <img src={github}></img>
            </span>
            <p>Passionate To develop intractive websites using Reactjs</p>
            <a href={CV} download>
                <button className="btn">Resume</button>
            </a>
            </div>
    </section>
)
export default Hero;