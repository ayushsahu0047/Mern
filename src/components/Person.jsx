import React from 'react'

const Person  =  () => {
    const person = {
    name : 'ayushsahu',
    age :'22',
    email :'ayushsnpmahupip@gmai.com'
};  
const as = {
  border : '2px solid yellow',
      padding :'2rem',
      backgroundColor : 'red',
      fontSize : '1rem'  
}
const test ={
  width : '30rem',
  height: '30rem',
  border : '3px solid green',
   backgroundColor:'blue',
   color :'yellow',
   fontSize : '30rem'
}

  return (
    <>
    
   <div>
      <h1 style={as}>{person.name}</h1>
      <h1 style={test}>{person.age}</h1>
      <h1 className='superman'>{person.email}</h1>
    </div>
    </>
  );
}

export default Person
