import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()

  return (
    <>
   <div onClick ={()=>navigate('/')}>
    <div className='btn btn-warning'>Navigate to home</div>
    </div>
    </>
  )
}

export default Detail
