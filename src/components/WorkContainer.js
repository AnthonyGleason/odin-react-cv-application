import React from 'react';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';

const WorkContainer = function(props){
  return(
    <ul>
      {props.workArray.map((workItem)=>{
        return(
          <li key={workItem.id+'-work'}>
            <div className='work-item' id={workItem.id+'-work'}>
              <p className='work-title'>{workItem.title}</p>
              <p className='work-company'>{workItem.company}</p>
              <p className='work-year'>{workItem.ystart} - {workItem.yend}</p>
              <p className='work-location'>{workItem.location}</p>
              <p className='duties'>{workItem.duties}</p>
            </div>

            <form style={{display: 'none'}} className='work-form' id={workItem.id+'-form'}>
              <label>Title: </label>
              <input value={workItem.title} onChange={(e)=>{handleInputChange(e.target.value,workItem.company,workItem.ystart,workItem.yend,workItem.location,workItem.duties,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
              <label>Company: </label>
              <input value={workItem.company} onChange={(e)=>{handleInputChange(workItem.title,e.target.value,workItem.ystart,workItem.yend,workItem.location,workItem.duties,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
              <label>Year Start: </label>
              <input value={workItem.ystart} onChange={(e)=>{handleInputChange(workItem.title,workItem.company,e.target.value,workItem.yend,workItem.location,workItem.duties,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
              <label>Year End: </label>
              <input value={workItem.yend} onChange={(e)=>{handleInputChange(workItem.title,workItem.company,workItem.ystart,e.target.value,workItem.location,workItem.duties,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
              <label>Location: </label>
              <input value={workItem.location} onChange={(e)=>{handleInputChange(workItem.title,workItem.company,workItem.ystart,workItem.yend,e.target.value,workItem.duties,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
              <label>Duties: </label>
              <input value={workItem.duties} onChange={(e)=>{handleInputChange(workItem.title,workItem.company,workItem.ystart,workItem.yend,workItem.location,e.target.value,props.setWorkItem,props.workArray.indexOf(workItem))}}></input>
            </form>

            <img className='edit' src={edit} onClick={()=>{toggleForm(workItem.id)}} alt='edit selected work item' />
            <img className='remove' src={remove} alt='remove selected work item' onClick={()=>{props.removeWorkItem(props.workArray.indexOf(workItem))}} />
          </li>
        )
      })}
    </ul>
  )
};

let handleInputChange = function(title, company, ystart, yend, location, duties, setWorkItem, index){
  setWorkItem(title,company,ystart,yend,location,duties,index);
};

let toggleForm = function(id){
  //get the form
  let workForm = document.querySelector('#'+id+'-form');
  //get the work item
  let workItem = document.querySelector('#'+id+'-work');
  //check to see if the work item is displayed then toggle display for each
  if (workItem.style.display!=='none'){
    workItem.style.display='none';
    workForm.style.display='grid';
  }else{
    workItem.style.display='grid';
    workForm.style.display='none';
  };
};

export default WorkContainer;