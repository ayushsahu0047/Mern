import React, { useState } from 'react'

const Counter_Test = () => {
  const[count,setcount] =useState(0)
  const increament =()=>{
    setcount(count+1)
  }
  return (
    <div>
      <h1>Count = {count}</h1>
      <button type="button" onClick={increament}>Counter</button>
    </div>
  )
}

export default Counter_Test

