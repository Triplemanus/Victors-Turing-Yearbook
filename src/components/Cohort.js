import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({staff, deleteStudent}) => {
  //console.log(staff[0].quote);
  const staffCards = staff.map(staff => {
    return (
      <Person 
        image = {staff.photo}
        name = {staff.name}
        quote = {staff.quote}
        superlative = {staff.superlative}
        id={staff.id}
        key={staff.id}
        deleteStudent = {deleteStudent}
      /> 
    )
  });

    return (
      <div className='staff-container'>
      {staffCards}
      </div>
    )
  
}

export default Cohort;
