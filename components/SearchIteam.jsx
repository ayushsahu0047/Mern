import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { product } from './Prdouct_data';




const SearchIteam = () => {
const {term} = useParams();
const [filterr,setfilter] = useState([])
useEffect(() =>{
    const filter =() =>{
            setfilter(product.filter((data)=>data.title.toLowerCase().includes(term.toLowerCase())
            )
            );
        
    };
    filter();
},[term]);




  return (
 <>
 
 
 {
    filterr.map((data)=>{
        return (
            <>
            
            <div className="conatiner">
          
              <div className='content'>
            <div className='text-center'>
            <Link to ={`/products/${data.id}`} 
            style={{
                    display :"flex",
                    justifyContent:"center",
                    alignItems :"center",
                    margin :"1rem",
                    alignContent : "center",
                
                }}> 
                <img style={{
                    height:"100px",
                    width:"30%",
                    objectFit:"contain"
                }}
                src={data.imageurl}
                alt='img'
                />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
             
                <br />
            
                
            <img src={data.imageurl} alt="" className='image'/><br/><br/>
            <button className='btn btn-primary my-3'>{data.price}</button>
            </Link>
            </div>
            </div>
            </div>
            </>
        )
    })
  }</>
    
  )
}

export default SearchIteam