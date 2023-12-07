import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../Prdouct_data';
import Navigate_component from './Navigate_component'


const Dynamic_Router = () => {
    const {id} = useParams();
    const product_detail = product.filter((data) => data.id == id);
  

  return (
    <>
    <div className='container text-centre'>
        <h1>{product_detail[0].tittle}</h1>
        <p>{product_detail[0].description}</p>
        <div style={
            {
                display :"flec"
                ,
                justifyContent:"center",
                alignItems:"center"
            }    }>
                <img src={product_detail[0].imgUrl} alt="" />

        </div>

    </div>
    <div className="my-5">
        <Navigate_component />
    </div>
    </>
  )
}

export default Dynamic_Router
