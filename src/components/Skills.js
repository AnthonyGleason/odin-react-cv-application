import React, {Component} from "react";
import SkillsContainer from "./SkillsContainer";
import uniqid from "uniqid";
import addImg from '../assets/add.svg';
import '../styles/Skills.css';

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
      skillArray: [new Skill(5,"Microsoft Word"), new Skill(5,"Microsoft Powerpoint"),new Skill(4,"Microsoft Excel"),new Skill(3.5,"Adobe Photoshop")],
    };
  };

  render(){
    return(
      <div className='skills'>
        <div className='content-title'>Skills</div>
        {/* The below container houses all of the skill items and will automatically update when new skills are added
        to the skills array. */}
        <SkillsContainer skillArray={this.state.skillArray} removeSkill={this.removeSkill.bind(this)} setSkill={this.setSkill.bind(this)} />
        <img className='add' onClick={()=>{this.addSkill(new Skill(0,'Skill'))}} alt='add' src={addImg} />
      </div>
    );
  };

  addSkill(skill){
    this.setState({
      skillArray: this.state.skillArray.concat(skill),
    });
  };

  removeSkill(index){
    let tempArray = this.state.skillArray;
    tempArray.splice(index, 1);
    this.setState({
      skillArray: tempArray,
    });
  };

  setSkill(title, count, index){
    //make a copy of the array
    let tempArray = this.state.skillArray;
    //update the skill at given index
    tempArray[index].skillTitle=title;
    tempArray[index].starCount=count;
    //update the array
    this.setState({
      skillArray: tempArray,
    });
  };
};