import React from 'react';
import './Person.css';

const Person = ({image, name, quote, superlative, id, deleteStudent}) => {
  return (
    <div className='person' contenteditable="true">
      {/* <p>{React.version}</p> */}
      <img className="image" src={image} alt="Spirit animal"></img>
      <h3>{name}</h3>
      <p className="quote">"{quote}"</p>
      <p>{superlative}</p>
      <button onClick={() => deleteStudent(id)}>🗑</button>
  </div>
  )
}

export default Person;
