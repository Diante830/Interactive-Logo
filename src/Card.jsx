import React from 'react';
import './Card.css';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

const Card = ({ isLogoClicked, toggleCard }) => {
  return (
    <div className={`frame ${isLogoClicked ? 'show-card' : ''}`}>
      <div className="center">
        <div className="profile">
          <div className="image">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <img src="./bluelogo.svg" width="70" height="70" alt="Diante Hazelle-Mclean" />
          </div>
          <div className="name">Diante Hazelle-Mclean</div>
          <div className="job">Web Developer & Graphic Designer</div>

          <div className="actions">
            <a href="https://diantes-design-portfolio.webflow.io/" target="_blank">
              <button className="btn">Portfolio</button>
            </a>
            <a href="https://drive.google.com/file/d/1V85fj8EcFEOougXok9Hct2_ltsEyGpGt/view" target="_blank">
              <button className="btn">Resume</button>
            </a>
          </div>
        </div>

        <div className="stats">
          <div className="box">
            <a href="https://www.linkedin.com/in/diante-hazelle-mclean-51916b221" target="_blank">
              <FaLinkedin size={20} color="#fffce2" />
            </a>
            <span className="parameter">LinkedIn</span>
          </div>
          <div className="box">
            <a href="https://www.behance.net/dhazelle" target="_blank">
              <FaBehance size={20} color="#fffce2" />
            </a>
            <span className="parameter">Behance</span>
          </div>
          <div className="box">
            <a href="https://github.com/Diante830" target="_blank">
              <FaGithub size={20} color="#fffce2" />
            </a>
            <span className="parameter">Github</span>
          </div>
        </div>
      </div>
      
      <div className="close-btn" onClick={toggleCard}>
	  ⓧ
      </div>
    </div>
  );
};

export default Card;