import React from 'react';
import './style.css';
import Contact_Icon from '../Contact_Icon';
import Personal_information from '../contact/Contact';
import SnowfallComponent from '../SnowfallComponent';

const Home = () => {
  return (
    <div className='w-[100%]'>
    <div className="home flex">
    <div className="name">
    <h1 className=' font-bold text-2xl'>Jenny Wilson</h1>
    <p className=' '>Corporate CEO</p>
{/* <SnowfallComponent></SnowfallComponent> */}
    </div>
      <div className='w-[100px] h-[100px]  ml-auto   relative rounded-full overflow-hidden border-2 border-blue-400'>
        <img className='w-[100] h-full object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb6FyQeCKb0i4kDlmB_qLNGWVwJ7msimfhA&usqp=CAU" alt="" />
      </div>
     </div>

      {/* Contact icons */}
      <Contact_Icon></Contact_Icon>

      <p className='mt-3 w-[85%] ml-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro soluta, dolores odio eum saepe molestias. Sunt repellat quaerat sapiente facere aspernatur, enim facilis?</p>

      {/* Additional personal information */}
      <Personal_information></Personal_information>
    </div>
  );
};

export default Home;
