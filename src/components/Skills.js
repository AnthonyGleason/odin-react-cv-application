import React, {Component} from "react";
import SkillsContainer from "./SkillsContainer";
import uniqid from "uniqid";
import addImg from '../assets/add.svg';

class Skill{
  constructor(starCount, skillTitle){
    this.skillTitle = skillTitle;
    this.starCount = starCount;
    this.id = uniqid();
  };
};
export default class Skills extends Component{
  constructor(){
    super();
    this.state = {
      skillArray: ['a'],
      //create the default skill
      skill: new Skill(0, "Coding"),
    };
  };

  render(){
    return(
      <div className='skills'>
        <div className='content-title'>Skills</div>
        {/*
        The below container houses all of the skill items and will automatically update when new skills are added
        to the skills array. 
        */}
        <SkillsContainer skillArray={this.state.skillArray} />
        {/* the below onClick function is USED ONLY FOR DEBUGGING it can be removed once the skillArray sucessfully updates */}
        <img className='add' onClick={()=>{this.setState({skillArray: ['b']})}} alt='add' src={addImg} />
      </div>
    );
  };
};

/*
example skill item layout

<div className='skill-item'>
  <div className='skill-title'>Microsoft Office</div>
  <div className='skill-stars'>
    <img alt='star' src={starFilled}></img>
    <img alt='star' src={starFilled}></img>
    <img alt='star' src={starFilled}></img>
    <img alt='star' src={starFilled}></img>
    <img alt='star' src={starHalf}></img>
  </div>
  <img className='remove' alt='remove skill entry' src={removeImg} />
</div>
*/