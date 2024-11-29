 const SkillList=({src,skill})=>(
    <div>
     <img src={src} className="skill-item"></img>
     <h3 className="skill-text">{skill}</h3>
    </div>
 );
 export default SkillList;