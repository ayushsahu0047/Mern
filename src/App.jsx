import React, { useState,useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  //Use Ref
  const passwordRef = useRef(null)


  const passwordgenerate =  useCallback(() => {
    let pass1 = "" 
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(numberAllowed) str += "0123456789"

    for (let i =1;i<=length;i++)
    {
    let char = Math.floor(Math.random()*str.length + 1)
    pass1 += str.charAt(char)
    }
    setpassword(pass1)

  },[length,numberAllowed,charAllowed,setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordgenerate()
  },[length,numberAllowed,charAllowed,passwordgenerate])
  
  return (
    <> 
    <div className='back1'>
      <h1>Password Generator</h1>
       <input type="text"  value={password} 
       placeholder='Password' readOnly ref={passwordRef}/>
       <button className='btn' onClick={copyPasswordToClipboard}>Copy</button>
       <input type="range" min={6} max={100} value={length} onChange={(e) =>{setlength(e.target.value)}} />
       
       <h1>Length:{length}</h1>
       <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=> setnumberAllowed((prev)=>!prev)} />
       <h1 htmlFor="characterInput">Numbers</h1>

       </div>
  </>

  )
}

export default App