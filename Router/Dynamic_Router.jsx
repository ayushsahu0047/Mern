import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic_Router = () => {
    const {slug} = useParams();
  return (
    <div>
         <div> DynamicRouter ={slug}</div>
          <h1>Dynamic Router</h1>
    </div>
  )
}

export default Dynamic_Router
