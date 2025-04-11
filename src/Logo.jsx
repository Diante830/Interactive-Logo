import React, { useState, useEffect } from 'react';
import './Logo.css';

const Logo = ({ isClicked, setIsClicked }) => {
  const text = "Diante Hazelle-Mclean";
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 1500;

    const type = () => {
      if (!isDeleting && index <= text.length) {
        setTypedText(text.substring(0, index));
        setIndex(index + 1);
      } else if (isDeleting && index >= 0) {
        setTypedText(text.substring(0, index));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
        setTimeout(type, pauseDuration);
        return;
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

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

      <div className="logo-typewriter">
        {typedText}
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default Logo;