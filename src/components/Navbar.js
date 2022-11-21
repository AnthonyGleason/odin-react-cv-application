import React, {Component} from 'react';
import reactLogo from '../assets/react.svg';
import githubLogo from '../assets/github.svg';

export default class Navbar extends Component{
  render(){
    return(
      <div className='nav'>
        <div>Odin CV Application</div>
        <img alt='react logo' src={reactLogo} />
        <img alt='github logo' href='https://github.com/antinf' src={githubLogo} />
      </div>
    );
  }
}