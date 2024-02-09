import React, { useContext, useState } from 'react'
import moneyContext from '../Context/Moneycontext'


const People = () => {
    const data =(useContext(moneyContext))
   
  return (
   <>
   People
   <div> People ={data.money}</div>
   <div className='container'>
    <h1>{data.person.name}</h1>
    <h1> Counter = {data.counter}</h1>
    <button
    onClick={() => data.setCounter(data.counter*10)}>incerase</button>
      <button className ="btn btn-dark"  onClick={() => data.setCounter(data.counter/10) }>Decrease</button>
   </div>
   </>
  )
}

export default People