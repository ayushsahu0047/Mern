import React, { useState } from 'react'


const Userstateexam = () => {
    const[name,set] = useState("Ram")
    const[age,setage] = useState('33')  
    const up = () => { 
        
        set("Syam")
        setage('444')
}
  return (

 <div>
    <br />

      Name:{name}
      <br/>
      age:{age}
      <br />
    
      <button onClick={up}>Update</button>
      </div>
  )
}

export default Userstateexam