import React from 'react'
import { useState } from 'react';

const  Multipleinput = () => {
    const style = {
    
        margin: "2rem",
    

    };
    const [formData,setFormdata] = useState({
        name :"",
        gmail:"",
        password:"",
    })
    const handlechange = (e) =>
    {
        setFormdata({...formData,[e.target.name]:[e.target.value]});
    };

    const submithandler =(e) =>{
        e.preventDefault();
     alert("You'r Form Submitted");
     setFormdata({
        name:"",
        gmail:"",
        password:""
     })
    }
  return (
    <div>
        <form onSubmit={submithandler}>
        Name:-{""} <input name='name' value={formData.name} style={style} type='text' onChange={handlechange}/><br/>
        {formData.name}
        <br />
        Email:-{""} <input name='gmail' value={formData.gmail} style={style} type='text' onChange={handlechange}/>
        {formData.gmail}
        <br />
        Password:-{""} <input name='password' value={formData.password} style={style} type='text' onChange={handlechange}/><br />
        {formData.password}
        <br />
       
        <button className='btn btn-primary mx-3 '>Submit</button>
        </form>
    </div>
  )
}

export default Multipleinput
