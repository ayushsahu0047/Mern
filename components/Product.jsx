import React from 'react'
const Product = ({product}) => {
    console.log(product);
    console.table(product)
  return (
    <>
  {
    product.map((data)=>{
        return (
            <>
            <div className="conatiner">
            <div className='text-center'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div style={{
                    display :"flex"
                    ,
                    justifyContent:"center",
                    alignItems :"center",
                    margin :"1rem"
                }}>
                <img style={{
                    height:"100px",
                    width:"30%",
                    objectFit:"contain"
                }}
                src={data.imageurl}
                alt='img'
                />
                </div>
            <img src={data.imageurl} alt="" className='image'/><br/><br/>
            <button className='btn btn-primary my-3'>{data.price}</button>
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
