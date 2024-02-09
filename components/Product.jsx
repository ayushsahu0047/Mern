import React, { useState } from 'react'
import {product} from './Prdouct_data'
import { Link }from 'react-router-dom'
import './style.css'
const Product = () => {
 const [products,setdata]=  useState(product);
const filterMethod = (catagory) => {
  setdata(product.filter((data)=>data.catagory == catagory))
}

 

  return (
    <>
      <div className="container d-flex justifly-content-center sticky-top bg-light">
      <button onClick={()=>setdata(product)}className='btn btn-info mx-3'>No_filter</button>
      <button onClick={()=>filterMethod("Mobiles")} className='btn btn-primary mx-3'>Mobiles</button>
      <button  onClick={()=>filterMethod("laptop")}  className='btn btn-warning mx-3'>Laptop</button>
      <button  onClick={()=>filterMethod("Tablet")}  className='btn btn-danger mx-3'>Tablet</button>

    </div>


  {
    products.map((data)=>{
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
  }
    </>
  )
}
export default Product
