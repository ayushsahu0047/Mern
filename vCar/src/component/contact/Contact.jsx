// PersonalInformation.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faBirthdayCake, faMapMarker ,faCircle } from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  return (
    <>
      <div className="container mt-10">

        <div className="contact flex">
        <h1 className='font-bold'>Contact</h1>
        <hr className='bg-blue-300 h-1 w-20 m-auto' />
          <FontAwesomeIcon icon={faCircle} className="text-blue-400 text-1xl  mr-10 ml-3 mt-1 relative right-11" />
        </div>

        <div className="row flex mt-20">
          <div className="col email w-[130px] h-[70px] m-4 info_box email relative -top-14 text-white ">

            <div className="icon w-80 h-6 pl-1 flex border-blue-400 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="mt-2 text-blue-400" />
              <div className="data">
                <p className='text-black'>E-mail address</p>
                <p className='font-bold text-black'>jackie@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="col email w-[130px] h-[70px] m-4 info_box email relative -top-14 text-white ">

            <div className="icon w-80 h-6 pl-1 flex border-blue-400 rounded-full">
              <FontAwesomeIcon icon={faMobile} className="mt-2 w-3 text-blue-400" />
              <div className="data">
                <p className='text-black'>Mobile Number</p>
                <p className='font-bold text-black'>+91 4078461474</p>
              </div>
            </div>

          </div>
        </div>
         <div className="row flex ">
          <div className="col email w-[130px] h-[70px] m-4 info_box email relative -top-14 text-white ">
            <div className="icon w-80 h-6 pl-1 flex border-blue-400 rounded-full">
              <FontAwesomeIcon icon={faBirthdayCake} className="mr-2 mt-2 text-blue-400" />
              <div className="data">
                <p className='text-black'>Date of Birth</p>
                <p className='font-bold text-black'>12th June 1990</p>
              </div>
            </div>

          </div>
          <div className="col email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8">

            <div className="icon w-80 h-6 pl-1 flex border-blue-400 rounded-full">
              <FontAwesomeIcon icon={faMapMarker} className="mt-2 text-blue-400" />
              <div className="data">
                <p className='text-black'>Location</p>
                <p className='font-bold text-black'>New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
