import React from 'react'
import './style.css'
const Gallery = () => {
  return (
    <>
        <h1 className='mt-5 font-bold text-center'>Gallery</h1>
        <hr className='w-11 bg-blue-400 h-1 m-auto'></hr>

            <div className="gallery flex mt-16 m-auto">

                      <div className="img1">
                        <img src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg " alt=""  className=''/>
                      </div>      


                      <div className="img2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SeHzXONbVfFiswRkgtKn0XjWTMWVV9aAIhhmflFwI1mh9ivB9WHjFss_ROePUhuYOuA&usqp=CAU" alt=""  className='img2' />
                      </div>   



                      <div className="img3">
                        <img src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg" alt="" className='' />
                      </div>   

            </div>

    </>
  )
}

export default Gallery
