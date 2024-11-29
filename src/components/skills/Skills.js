import SkillList from "./SkillList";
import { react_logo,node_logo,js_logo,css_logo,html_logo,redux_logo } from "../../constants";
const Skills = ()=>{
    const Skilldata = [
        { skill: 'React', src: react_logo  },
        { skill: 'Node.js', src: node_logo },
        { skill: 'JavaScript', src: js_logo  },
        { skill: 'CSS', src: css_logo },
        { skill: 'HTML', src: html_logo },
        {skill:'Redux', src:redux_logo }
    ]
    return(
        <>
    <div>
        <h1 className="skill-head">Skills</h1>
    </div>
    <div className="skill-block">
        {
            Skilldata.map((ele,index)=>(
                <SkillList key={index} {...ele}/>
            ))
        }
    </div>
    </>
    )
};
export default Skills;