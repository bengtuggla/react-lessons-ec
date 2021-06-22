import React from 'react';
import '../App.css';

const Person = (props) => {
  return (
    <div className='border'>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
};

export default Person;
