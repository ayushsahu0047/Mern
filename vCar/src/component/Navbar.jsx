import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Home from './home/Home';
import Appointment from './Appointment';
import Service from './Service';
import Gallery from './gallery/Gallery';
import Prodcuts from './products/Products';
import Blog from './Blog/Blog';

const Navbar = () => {
  useEffect(() => {
    // Initialize smooth-scroll when the component mounts
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
    });

    // Clean up the smooth-scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
<div className='container ml-1' >
 <div className='container sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[400px] m-auto p-5 '>
      <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      <div className="absolute inset-0 w-full h-37 bg-blue-500 transform -skew-y-6"></div>
      <div className="relative p-8">
        <div className="absolute top-0 left-0 right-0 -mt-16 mx-auto w-32 h-32 bg-white rounded-full overflow-hidden border-4 border-blue-500 shadow-sl">
          <img src={"https://img.freepik.com/free-photo/time-change-planning-concept_53876-120194.jpg?size=626&ext=jpg&ga=GA1.1.1022238518.1697088160&semt=ais"}
          alt="Profile" className="object-cover w-full h-full" />
        </div>
        </div>
        <div/>
        </div>
     <div className="homepage ">
        <Home></Home>
        
     </div>
     
      <div className="service">
       <Service></Service>
      </div>
      
      <div className="appointment">
        <Appointment></Appointment>
      </div>


      
      <div className="GALLERY">
       <Gallery></Gallery>
      </div>

      <div className="GALLERY">
      <Prodcuts></Prodcuts>
      </div>

      <div className="GALLERY">
     <Blog></Blog>
      </div>
    
      </div>
    </div>
  );
};

export default Navbar;
