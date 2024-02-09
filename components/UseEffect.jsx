import React, { useState } from 'react'
import {useEffect} from 'react'

const UseEffect = () => {
    const [first, setfirst] = useState(0)
  useEffect(()=>{
    console.log("Useeffect is Running");
    document.title = 'sideeffct ${first}'
  },[first]
  );
  
  
    return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst(first+1) } className='btn btn-danger'><h1>Increase</h1></button>
      <div>use_Effect</div>
    </div>
  )
}

export default UseEffect
