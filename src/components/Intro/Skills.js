import React from "react";
import classes from './Skills.module.css';
import {skills as languagesAndTools} from "./skill-icons";

const Skills = () => {
    const skills = languagesAndTools;
    return <div className={classes['container']}>
      <ul className={classes['skills-list']}>
        {skills.map(skill => <li className={classes.skill} key={skill.id}><img src={skill.img} alt={skill.alt}/></li>)}
      </ul>
    </div>
  }

  export default Skills;