import React, { useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  

  return (
    <div
      className={`logo-container ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className="image-layer top-layer">
        <img src="./Business1.svg" alt="Top Layer" />
      </div>
      <div className="image-layer bottom-layer">
        <img src="./Business2.svg" alt="Bottom Layer" />
      </div>
    </div>
  );
};

export default Logo;