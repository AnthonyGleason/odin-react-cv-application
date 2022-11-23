import React, {Component} from "react";
//Import images
import starOutline from '../assets/star-outline.svg';
import starFilled from '../assets/star.svg';
import starHalf from '../assets/star-half.svg';
import removeImg from '../assets/remove.svg';

export default class SkillsContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      skillArray: props.skillArray,
    }
  };

  render(){
    return(
      <ul>
        {console.log(this.state.skillArray)}
        {this.state.skillArray.map((skill)=>{
          return <li key={skill.id+1}>{skill.skillTitle}</li>
        })}
      </ul>
    )
  };
};