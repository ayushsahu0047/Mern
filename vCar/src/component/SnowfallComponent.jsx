import React, { useEffect } from 'react';
  // Create a CSS file for styling

const SnowfallComponent = () => {
  useEffect(() => {
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
    //   snowflake.style.animationDuration = `${Math.random() * 3 + 1}s`;
    //   snowflake.style.animationDelay = `${Math.random()}s`;
      snowflakesContainer.appendChild(snowflake);
    }
  }, []); // Empty dependency array means the effect will run once after the initial render

  return (
    <div className="snowflakes">
  
  
    </div>
  );
};

export default SnowfallComponent;
