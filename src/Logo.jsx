import React, { useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`image-layer top-layer ${isHovered ? 'hovered' : ''}`}>
        <img src="./greyme.svg" alt="Profile Image" />
      </div>
      <div className={`image-layer bottom-layer ${isHovered ? 'hovered' : ''}`}>
        <img src="./blueme.svg" alt="Profile Image" />
      </div>
    </div>
  );
};

export default Logo;