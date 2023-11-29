import React, { useState } from 'react'


const Counter = () => {
    const[counter,setcounter] = useState(8)

//let counter = 0;
const i  = () => { //counter++;
    setcounter(counter+1)
console.log(counter);}
const d  = () => { //counter--;
    setcounter(counter-1)
console.log(counter);}
  return (
 <div>
      {counter}
      <br />
      <button onClick={i}>Increase</button>
      <button onClick={d}> Decrese</button>
      </div>
  )
}

export default Counter
