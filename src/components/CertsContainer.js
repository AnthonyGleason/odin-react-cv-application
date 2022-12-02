import React from 'react';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';

const CertsContainer = function(props){

  return(
    <ul>
      {props.certArray.map((cert)=>{
        return(
          <li key={cert.id}>
            {/* Working within here set this up similarly to the skill container section */}
            <div className='cert-item' id={cert.id+'-cert'}>
              {cert.certTitle}
              {cert.dateAcquired}
            </div>
            <form className='cert-form' id={cert.id+'-form'} style={{display: 'none'}}>
              <label>Certification Title: </label>
              <input value={cert.certTitle} onChange={(e)=>{handleCertTitleInput(e.target.value,cert,props.setCert,props.certArray.indexOf(cert))}}></input>
              <label>Date Acquired: </label>
              <input value={cert.dateAcquired} onChange={(e)=>{handleCertDateInput(e.target.value,cert,props.setCert,props.certArray.indexOf(cert))}}></input>
            </form>
            <img className='edit' alt='edit cert' src={edit} onClick={()=>toggleCertForm(cert.id)}></img>
            <img className='remove' alt='remove cert' src={remove} onClick={()=>props.removeCert(props.certArray.indexOf(cert))}></img>
          </li>
        )
      })}
    </ul>
  )
}

let handleCertTitleInput = function(title, cert, setCert, index){
  setCert(title, cert.dateAcquired, index);
};

let handleCertDateInput = function(date, cert, setCert, index){
  setCert(cert.certTitle, date, index);
};

let toggleCertForm = function(id){
  //get the cert item div
  let certItem = document.querySelector('#'+id+'-cert');
  //get the cert form for the div
  let certForm = document.querySelector('#'+id+'-form');
  //toggle the form for the cert item by checking to see if the certItem is displayed
  if (certItem.style.display!=='none'){
    certItem.style.display='none';
    certForm.style.display='block';
  }else{
    certItem.style.display='block';
    certForm.style.display='none';
  }
};

export default CertsContainer;