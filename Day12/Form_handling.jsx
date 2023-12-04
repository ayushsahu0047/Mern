import React from 'react'
import { useState } from 'react'

const Form_handling = () => {
    const [data,setdata] = useState("")
    const [data1,setdata1] = useState("")
    const [data2,setdata2] = useState("")
    
  return (
    <>
 <div className="container my-5 text-center d-flex  justify-content-center items-center ">
<h1>Name</h1><input value= {data} type="text" onChange={(e)=>setdata(e.target.value)} />

<br />
<h1>Email</h1><input value= {data1} type="text" onChange={(e)=>setdata1(e.target.value)} />
<br />
<h1>Passsword</h1><input value= {data2} type="password"  onChange={(e)=>setdata2(e.target.value)} />

      <button className='btn btn-primary mx-3 '>Submit</button>

   </div>
   <h1 className='text-center'>{data}</h1><br />
   <h1 className='text-center'>{data1}</h1><br />
   <h1 className='text-center'>{data2}</h1>
   </>

  )
}

export default Form_handling
