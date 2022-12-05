import React from "react";
//Import images
import starOutline from '../assets/star-outline.svg';
import starFilled from '../assets/star.svg';
import starHalf from '../assets/star-half.svg';
import removeImg from '../assets/remove.svg';
import edit from '../assets/edit.svg';
const SkillsContainer = (props) =>{
  return(
    <ul>
      {props.skillArray.map((skill)=>{
        return(
          <li key={skill.id}>
            {/* This entire div with the className 'skill-item' will be hidden when the edit button is pressed */}
            <div className="skill-item" id={skill.id+'-skill'}>
              <p className="skill-title">{skill.skillTitle}</p>
              <p className="skill-stars">{getStars(skill)}</p>
            </div>
            {/* hidden by default, only shown when the edit button is clicked */}
            <form className='skill-form' id={skill.id+'-form'} style={{display: 'none'}}>
              <label>Skill Title: </label>
              <input value={skill.skillTitle} onChange={(e)=>{handleSkillTitleInput(e.target.value, skill, props.setSkill, props.skillArray.indexOf(skill))}}></input>
              <label>Star Count: </label>
              <input value={skill.starCount} onChange={(e)=>{handleSkillStarInput(e.target.value, skill, props.setSkill, props.skillArray.indexOf(skill))}}></input>
            </form>
            <img className='edit' alt='edit button' src={edit} onClick={()=>toggleSkillForm(skill.id)} />
            <img className='remove' alt='remove button' src={removeImg} onClick={()=>props.removeSkill(props.skillArray.indexOf(skill))} />
          </li>
        );
      })}
    </ul>
  );
};

let handleSkillTitleInput = function(titleValue, skill, setSkill, index){
  setSkill(titleValue, skill.starCount, index);
};

let handleSkillStarInput = function(starCountValue, skill, setSkill, index){
  setSkill(skill.skillTitle, starCountValue, index);
};

let toggleSkillForm = function(id){
  //get the skill div by looking for an element with an id of the skill key.
  let skillItem = document.querySelector('#'+id+'-skill');
  //get the form in the same manner as the skill item div 
  let skillForm = document.querySelector('#'+id+'-form');
  if (skillItem.style.display!=='none'){
    skillItem.style.display='none';
    skillForm.style.display='block';
  }else{
    skillItem.style.display='block';
    skillForm.style.display='none';
  };
};

let getStars = function(skill){
  //star array stores if the star is filled or not (or half star if applicable)
  let starArray =[]

  //copy the starcount to avoid modifying the original value
  let starCount = skill.starCount;

  //dynamically render stars by addind stars to starArray
  while (starArray.length<5){
    //check to see if the starCount is 0, this will fill the remaining stars with an empty star outline
    if (starCount===0){
      starArray.push(starOutline);
    //check to see if the starCount is greater than 0, this will fill either a half star or full star
    } else if (starCount>0){
      //check for a decimal value, we can assume if the value is not an integer there is a 0.5 (half star value)
      if (starCount % 1 !== 0 ){
        starArray.push(starHalf);
        starCount-=0.5;
      }else{
        //else add a full star
        starArray.push(starFilled);
        starCount--;
      };
    }
  }

  /* 
  now that we have our star array we can prettify it by placing the half star in between 
  the star outlines and the filled stars. If there are no filled stars the half star will simply
  be placed at the start of the array.
  */

  if (starArray[0]===starHalf){
    //find the end of the filled stars
    for(let i=0; i<5;i++){
      if (starArray[i+1]===starOutline){
        starArray[0]=starArray[i];
        starArray[i]=starHalf;
        break;
      };
    };
  };

  return (
  <>
    <img alt='star' src={starArray[0]}></img>
    <img alt='star' src={starArray[1]}></img>
    <img alt='star' src={starArray[2]}></img>
    <img alt='star' src={starArray[3]}></img>
    <img alt='star' src={starArray[4]}></img>
  </>
  )
}
export default SkillsContainer;