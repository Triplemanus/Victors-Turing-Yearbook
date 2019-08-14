import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  //console.log(staff[0].quote);
  const staffCards = staff.map(staff => {
    return (
      <Person 
        image = {staff.photo}
        name = {staff.name}
        quote = {staff.quote}
        superlative = {staff.superlative}
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
