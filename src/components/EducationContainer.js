import React from 'react';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';

const EducationContainer = function (props){
    return(
        <ul>
            {props.eduArray.map((edu)=>{
                return(
                    <li key={edu.id}>
                        {/* This div will be hidden when the edit button is pressed */}
                        <div className='edu-item' id={edu.id+'-edu'}>
                            <p className='edu-degree'>{edu.degree}</p>
                            <p className='edu-ystart'>{edu.ystart}</p>
                            <p className='edu-yend'>{edu.yend}</p>
                            <p className='edu-school'>{edu.school}</p>
                            <p className='edu-location'>{edu.location}</p>
                        </div>
                        {/* This is the form to edit the selected edu*/}
                        <form style={{display: 'none'}} className='edu-form' id={edu.id+'-form'}>
                            <label>Degree: </label>
                            <input value={edu.degree} onChange={(e)=>{handleEduInput(e.target.value,edu.ystart,edu.yend,edu.school,edu.location,props.setEdu,props.eduArray.indexOf(edu))}} />
                            <label>Year Start: </label>
                            <input value={edu.ystart} onChange={(e)=>{handleEduInput(edu.degree,e.target.value,edu.yend,edu.school,edu.location,props.setEdu,props.eduArray.indexOf(edu))}} />
                            <label>Year End: </label>
                            <input value={edu.yend} onChange={(e)=>{handleEduInput(edu.degree,edu.ystart,e.target.value,edu.school,edu.location,props.setEdu,props.eduArray.indexOf(edu))}} />
                            <label>School: </label>
                            <input value={edu.school} onChange={(e)=>{handleEduInput(edu.degree,edu.ystart,edu.yend,e.target.value,edu.location,props.setEdu,props.eduArray.indexOf(edu))}} />
                            <label>Location: </label>
                            <input value={edu.location} onChange={(e)=>{handleEduInput(edu.degree,edu.ystart,edu.yend,edu.school,e.target.value,props.setEdu,props.eduArray.indexOf(edu))}} />
                        </form>
                        <img className='edit' src={edit} alt='edit education information' onClick={()=>{toggleForm(edu.id)}} />
                        <img className='remove' src={remove} alt='remove the selected education information' onClick={()=>{props.removeEdu(props.eduArray.indexOf(edu))}} />
                    </li>
                )
            })}
        </ul>
    );
};
let handleEduInput = function (degree,ystart,yend,school,location,setEdu,index){
    setEdu(degree,ystart,yend,school,location,index);
};

let toggleForm = function(id){
    //get the form
    let eduForm = document.querySelector('#'+id+'-form');
    //get the edu item div
    let eduItem = document.querySelector('#'+id+'-edu');
    //check to see if the edu item is shown and then toggle the display for both the form and edu item
    if (eduItem.style.display!=='none'){
        eduItem.style.display='none';
        eduForm.style.display='block';
    }else{
        eduItem.style.display='block';
        eduForm.style.display='none';
    }
};

export default EducationContainer;