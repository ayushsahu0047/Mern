import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe ,faCircle} from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <>
    <div className="service flex">
    <h1 className='text-left font-bold ml-7'>Our Services</h1>
    <FontAwesomeIcon icon={faCircle} className="text-blue-400 text-1xl ml-10  mt-1 relative " />
      <hr className='w-24 bg-blue-300 h-1.5 mt-2 ml-auto'/>


    </div>
    <div className="webdesign flex mt-3 servicebox">
           <div className="website-icon w-11 h-[50px] bg-blue-100 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
        </div>
        <div className="webdata w-[89%] text-left ml-3">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>


      <div className="webdesign flex mt-3 servicebox">
           <div className="website-icon w-11 h-[50px] bg-blue-100 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
        </div>
        <div className="webdata w-[89%] text-left ml-3">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default Service;
