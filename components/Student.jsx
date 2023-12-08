import React from 'react'

const Student  =  () => {
    const student = {
    name : 'ayushsahu',
    age :'22',
    Course :'MERN'
    
};  


  return (
    <>
    
   <div>
      <h1>Name:-{student.name}</h1>
      <h1>Age:-{student.age}</h1>
      <h1>Course:-{student.Course}</h1>
    </div>
    </>
  );
}

export default Student