import React, {Component} from "react";
import add from "../assets/add.svg";
import uniquid from "uniqid";
import EducationContainer from "./EducationContainer";
import '../styles/Education.css';

class Edu{
  constructor(degree,ystart,yend,school,location){
    this.degree = degree;
    this.ystart = ystart;
    this.yend = yend;
    this.school = school;
    this.location = location;
    this.id = uniquid();
  };
};
export default class Education extends Component{
  constructor(){
    super();
    this.state = {
      eduArray: [new Edu("Computer Science", "2018", "2022", "Odin University", "New York, New York")],
    };
  };

  render(){
    return(
      <div className="education">
        <div className="content-title">Education</div>
        {/* Below is the education content component which houses education items*/}
        <EducationContainer eduArray={this.state.eduArray} addEdu={this.addEdu.bind(this)} setEdu={this.setEdu.bind(this)} removeEdu={this.removeEdu.bind(this)} />
        <img className="add" src={add} alt="add an education item" onClick={()=>{this.addEdu(new Edu("Degree", "Starting Year", "Ending Year", "School Attended", "City, State"))}} />
      </div>
    );
  };

  addEdu(edu){
    this.setState({
      eduArray: this.state.eduArray.concat(edu),
    });
  };

  removeEdu(index){
    //make a copy of the edu array
    let tempArray = this.state.eduArray;
    //remove the element at given index
    tempArray.splice(index,1);
    //update the edu array
    this.setState({
      eduArray: tempArray,
    });
  };

  setEdu(degree,ystart,yend,school,location,index){
    //make a copy of the array
    let tempArray = this.state.eduArray;
    //update array at index
    tempArray[index].degree = degree;
    tempArray[index].ystart = ystart;
    tempArray[index].yend = yend;
    tempArray[index].school = school;
    tempArray[index].location = location;
    //update the edu array with the temp array
    this.setState({
      eduArray: tempArray,
    });
  };
};