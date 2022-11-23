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
        return(
          <li key={skill.id}>
            {skill.skillTitle} {getStars(skill)} <img className='remove' alt='remove button' src={removeImg}></img>
          </li>
        );
      })}
    </ul>
  )
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