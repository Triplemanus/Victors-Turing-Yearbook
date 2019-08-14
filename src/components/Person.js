import React from 'react';
import './Person.css';

const Person = ({image, name, quote, superlative}) => {
  console.log('image is ', {image})
  return (
    <div className='person'>
      <img className="image" src={image} alt="Spirit animal"></img>
      <h3>{name}</h3>
      <p className="quote">"{quote}"</p>
      <p>{superlative}</p>
  </div>
  )
}

export default Person;
