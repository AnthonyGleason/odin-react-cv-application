import React, {Component} from 'react';
import add from '../assets/add.svg';
import CertsContainer from './CertsContainer';
import uniquid from 'uniqid';

class Cert{
  constructor(certTitle, dateAcquired){
    this.certTitle = certTitle;
    this.dateAcquired = dateAcquired;
    this.id = uniquid();
  };
};
export default class Certs extends Component{
  constructor(){
    super();
    this.state = {
      certArray: [new Cert('Comptia A+', 'July, 5th, 2021')],
    };
  };

  render(){
    return(
      <div className='certs'>
        <div className='content-title'>Certifications</div>
        <CertsContainer certArray={this.state.certArray} removeCert={this.removeCert.bind(this)} />
        <img className='add' src={add} onClick={()=>this.addCert(new Cert('Placeholder', 'March, 1st, 2022'))} alt='add a certification' />
      </div>
    );
  };

  addCert(cert){
    this.setState({
      certArray: this.state.certArray.concat(cert),
    });
  };
  removeCert(index){
    //get the current cert array
    let tempArray=this.state.certArray;
    //remove the cert at index
    tempArray.splice(index,1);
    //update the state with the tempArray
    this.setState({
      certArray: tempArray,
    });
  };
}
