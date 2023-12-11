import React from 'react';
import ChildComponent from './ChildComponent';

const Person = () => {
  const data = {
    name: 'Ayush Sahu',
    age: 25,
    city: 'Indore',
    gmail: 'ayushsahupip@gmail.com',
  };

  return (
    <div>
      <h1>Person Component</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default Person;

