import React, {Component} from 'react';
import reactLogo from '../assets/react.svg';
import githubLogo from '../assets/github.svg';

export default class Navbar extends Component{
  render(){
    return(
      <div className='nav'>
        <div>Odin CV Application</div>
        <img alt='react logo' src={reactLogo} />
        <a href='https://github.com/antinf'>
          <img alt='github logo' src={githubLogo} />
        </a>
      </div>
    );
  }
}