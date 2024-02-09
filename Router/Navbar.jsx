import React from 'react'
import { Link }from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <div className="d-flex justify-content-center  text-succes  d-block p-2 bg-danger text-black">
  
      <Link to ={'/'}>Home</Link>
      <Link to ={'/about'}>About</Link>
      <Link to ={'/carrer'}>Carrer</Link>
      <Link to ={'/products'}>Product</Link>
      <Link to ={'/team'}>Team</Link>
      
      
    </div>
    </>
  )
}

export default Navbar;
