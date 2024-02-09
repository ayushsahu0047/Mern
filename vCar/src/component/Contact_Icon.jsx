import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact_Icon = () => {


  const openWhatsApp = (number) => {
    // Replace with your actual WhatsApp functionality
    alert('Opening WhatsApp with number: ' + number);
  };


  const openMail = (mailTo) => {
    // Replace with your actual mail functionality
    window.location.href = mailTo;
  };

  const openFacebook = () => {
    // Replace with your actual Facebook functionality
    alert('Opening Facebook');
  };

  const openInstagram = () => {
    // Replace with your actual Instagram functionality
    alert('Opening Instagram');
  };

  const openTwitter = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const twitterProfileUrl = `https://twitter.com/your_twitter_username`;
    window.open(twitterProfileUrl, '_blank');
  };

  return (
    <>

      <div className="contact flex mt-3">
     
    {/* <div className="dot text-blue-400 text-3xl ">.</div> */}
      </div>
      <div className="flex flex-wrap text-2xl mr-10">
      {/* WhatsApp icon */}
     <div className="Cicon ">
     <div className=" cursor-pointer  hover:text-green-700 text-center ml-4 mr-1">
        <FontAwesomeIcon icon={faWhatsapp} className="text-1xl  text-blue-400 " onClick={() => openWhatsApp('+9893785834')} />
       
      </div>
     </div>
     {/* Mail icon */}
      <div className="Cicon">
      <div className=" cursor-pointer  hover:text-purple-700 text-center ml-1 mr-1">
        <FontAwesomeIcon icon={faEnvelope} className="text-1xl  text-blue-400 " onClick={() => openMail('mailto:komalprajapat267@mail.com')} />
        {/* <p className="text-xs">Mail</p> */}
      </div>
      </div>

      {/* Facebook icon */}
      <div className="Cicon">
      <div className=" cursor-pointer  hover:text-blue-700 text-center ml-1 mr-1">
        <FontAwesomeIcon icon={faFacebook} className="text-1xl text-blue-400 " onClick={() => openFacebook()} />
        {/* <p className="text-xs">Facebook</p> */}
      </div>
      </div>
       {/* Instagram icon */}
      <div className="Cicon">
      <div className=" cursor-pointer  hover:text-pink-700 text-center ml-1 mr-1">
        <FontAwesomeIcon icon={faInstagram} className="text-1xl  text-blue-400 " onClick={() => openInstagram()} />
        {/* <p className="text-xs">Instagram</p> */}
      </div>
      </div>
      <div className="Cicon">
      <div className=" cursor-pointer  hover:text-blue-700 text-center ml-1 mr-1">
        <FontAwesomeIcon icon={faTwitter} className="text-1xl text-blue-400 " onClick={() => openTwitter()} />
        </div>
        {/* <p className="text-xs">Twitter</p> */}
      </div>
    </div>
    </>
  );
};

export default Contact_Icon;
