import React from 'react';
import './Prodcuts.css';

const Prodcuts = () => {
  const imageAddresses = [
    'https://via.placeholder.com/150?text=Product1',
    'https://via.placeholder.com/150?text=Product2',
    'https://via.placeholder.com/150?text=Product3',
    'https://via.placeholder.com/150?text=Product1',
    'https://via.placeholder.com/150?text=Product2',
    'https://via.placeholder.com/150?text=Product3',
    // ... add more image addresses
  ];

  return (
    <>
      <h1 className='mt-5 font-bold text-center'>Products</h1>
      <hr className='w-11 bg-blue-400 h-1 m-auto'></hr>

      <div className="scrollable-container mt-5">
        <div className="image-scroll flex">
          {imageAddresses.map((address, index) => (
            <img
              key={index}
              src={address}
              alt={`Product ${index + 1}`}
              className="image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Prodcuts;
