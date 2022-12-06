import React, { Component } from "react";
//import content components
import General from "./General";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Certs from "./Certs";
import '../styles/Content.css';

export default class Content extends Component {
  render(){
    return(
      <div className="content">
        <General />
        <Skills />
        <Education />
        <Work />
        <Certs />
      </div>
    )
  };
}