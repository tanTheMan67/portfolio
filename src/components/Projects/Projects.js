 import { project_img1, project_img2,project_img3,project_img4 } from "../../constants";
 const Projects = ()=>(
<div>
<div className="project-glow">
<ul className="list">
    <li>P</li>
    <li>R</li>
    <li>O</li>
    <li>J</li>
    <li>E</li>
    <li>C</li>
    <li>T</li>
    <li>S</li>
</ul>
</div>
<div className="proj-1">
<img className="proj-img" src={project_img1}></img>
<div className="proj-img-detail">
<h2>VideoTube</h2>
<p>An online video Streaming Platform.</p>
</div>
</div>
<div className="proj-2">
 <img className="proj-img" src={project_img2}></img>
 <div className="proj-img-detail">
 <h2>Foodz</h2>
 <p>Food delivery service along with curation using Live APIs</p>
 </div>
</div>
<div className="proj-3">
<img className="proj-img" src={project_img3}></img>
<div className="proj-img-detail">
    <h2>OFFSYDE</h2>
    <p>All-in-one go to solution for Football fixtures.</p>
</div>

</div>
</div>
 )
 export default Projects;