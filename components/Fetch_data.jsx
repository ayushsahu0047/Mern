import React, { useEffect, useState } from 'react'


const Fetch_data = () => {
    const [apidata, setapidata] = useState([])

    useEffect(()=>{
        const fetchdata = async()=>{
            const api =  await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            console.log(data);
            setapidata(data);
        }
        fetchdata()
    },[])
    console.log("data in state",apidata);
  return <div>
    {
      apidata.map((data) => {
        return (
        <>
        <div className='container text=center '>
        <h1>{data.title}</h1>
        <h1>{data.name}</h1>
        </div>
        </>
        
        )
})}
</div>;
};


export default Fetch_data
