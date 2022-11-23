import React, {Component} from 'react';
import edit from '../assets/edit.svg';
import linkedinLogo from '../assets/linkedin.svg';

export default class General extends Component{
  constructor(){
    super();
    this.state = {
      /* Put default states here */
      name: 'John Smith',
      phoneNumber: '123-456-7890',
      address: '123 E Broadway, New York, NY 10002',
      linkedin: 'https://www.linkedin.com',
    };
  };

  render(){
    return(
      <div className='general'>
        <div className='content-title'>General Information</div>

        <div className='name'>
          {/* Name text is shown by default */}
          <div className='name-text'>{this.state.name}</div>
          {/* Form to edit the name text is hidden by default */}
          <form className='name-form' style={{display: 'none'}}>
            <label>Name: </label>
            <input onChange={(e)=>this.changeName(e.target.value)} value={this.state.name} />
          </form>
          <img className='edit' alt='edit-name' onClick={()=>{this.toggleNameDisplay()}} src={edit}></img>
        </div>

        <div className='phone-number'>
          {/* Phone number text is shown by default */}
          <div className='phone-number-text'>{this.state.phoneNumber}</div>
          {/* Form to edit the phone number text is hidden by default */}
          <form className='phone-number-form' style={{display: 'none'}}>
            <label>Phone Number: </label>
            <input onChange={(e)=>this.changePhoneNumber(e.target.value)} value={this.state.phoneNumber} />
          </form>
          <img className='edit' alt='edit-phone-number' onClick={()=>{this.togglePhoneNumberDisplay()}} src={edit}></img>
        </div>

        <div className='address'>
          {/* Address text is shown by default */}
          <div className='address-text'>{this.state.address}</div>
          {/* Form to edit the address text is hidden by default */}
          <form className='address-form' style={{display: 'none'}}>
            <label>Address: </label>
            <input onChange={(e)=>this.changeAddress(e.target.value)} value={this.state.address} />
          </form>
          <img className='edit' alt='edit-address' onClick={()=>{this.toggleAddressDisplay()}} src={edit}></img>
        </div>

        <div className='linkedin'>
          <img className='linkedin-img' alt='linkedin logo' src={linkedinLogo} />
          {/* Linkedin text is shown by default */}
          <a href={this.state.linkedin} className='linkedin-text'>Linkedin</a>
          {/* Form to edit the linkedin text is hidden by default*/}
          <form className='linkedin-form' style={{display: 'none'}}>
            <label>Linkedin: </label>
            <input onChange={(e)=>this.changeLinkedin(e.target.value)} value={this.state.linkedin} />
          </form>
          <img className='edit' alt='edit-linkedin' onClick={()=>{this.toggleLinkedinDisplay()}} src={edit}></img>
        </div>
      </div>
    )
  };

  toggleNameDisplay(){
    //get elements
    let nameTextField = document.querySelector('.name-text');
    let nameForm = document.querySelector('.name-form');
    //check for current display status and then toggle the display status of those elements
    if (nameTextField.style.display!=='none'){
      nameTextField.style.display='none';
      nameForm.style.display='block';
    }else{
      nameTextField.style.display='block';
      nameForm.style.display='none';
    }
  };
  
  togglePhoneNumberDisplay(){
    //get elements
    let phoneNumberTextField = document.querySelector('.phone-number-text');
    let phoneNumberForm = document.querySelector('.phone-number-form');
    //check for current display status and then toggle the display status of those elements
    if (phoneNumberTextField.style.display!=='none'){
      phoneNumberTextField.style.display='none';
      phoneNumberForm.style.display='block';
    }else{
      phoneNumberTextField.style.display='block';
      phoneNumberForm.style.display='none';
    }
  };

  toggleAddressDisplay(){
    //get elements
    let addressTextField = document.querySelector('.address-text');
    let addressForm = document.querySelector('.address-form');
    //check for current display status and then toggle the display status of those elements
    if (addressTextField.style.display!=='none'){
      addressTextField.style.display='none';
      addressForm.style.display='block';
    }else{
      addressTextField.style.display='block';
      addressForm.style.display='none';
    }
  };

  toggleLinkedinDisplay(){
    //get elements
    let linkedinTextField = document.querySelector('.linkedin-text');
    let linkedinForm = document.querySelector('.linkedin-form');
    //check for current display status and then toggle the display status of those elements
    if (linkedinTextField.style.display!=='none'){
      linkedinTextField.style.display='none';
      linkedinForm.style.display='block';
    }else{
      linkedinTextField.style.display='block';
      linkedinForm.style.display='none';
    }
  };

  //method which allows the modification of the name state
  changeName(newName){
    this.setState({name: newName});
  };

  //method which allows the modification of the phoneNumber state
  changePhoneNumber(newPhoneNumber){
    this.setState({phoneNumber: newPhoneNumber});
  };

  //method which allows the modification of the address state
  changeAddress(newAddress){
    this.setState({address: newAddress});
  };

  //method which allows the modification of the linkedin state
  changeLinkedin(newLinkedin){
    this.setState({linkedin: newLinkedin});
  };
};