import React, {Component} from "react";
//Import images
import starOutline from '../assets/star-outline.svg';
import starFilled from '../assets/star.svg';
import starHalf from '../assets/star-half.svg';
import removeImg from '../assets/remove.svg';

const SkillsContainer = (props) =>{
  return(
    <ul>
      {props.skillArray.map((skill)=>{
        return <li key={skill.id}>{skill.skillTitle}</li>
      })}
    </ul>
  )
};

export default SkillsContainer;