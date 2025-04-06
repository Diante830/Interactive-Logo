import React from 'react';
import './Card.css'; 
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

const Card = () => {
  return (
  
    <div class="frame">
  <div class="center">
    
		<div class="profile">
			<div class="image">
				<div class="circle-1"></div>
				<div class="circle-2"></div>
				<img src="./bluelogo.svg" width="70" height="70" alt="Diante Hazelle-Mclean"/>
			</div>
			
			<div class="name">Diante Hazelle-Mclean</div>
			<div class="job">Web Developer & Graphic Designer</div>
			
			<div class="actions">
      <a href="https://diantes-design-portfolio.webflow.io/" target="_blank">
				<button class="btn">Portfolio</button>
        </a>
        <a href="https://drive.google.com/file/d/1V85fj8EcFEOougXok9Hct2_ltsEyGpGt/view" target="_blank">
				<button class="btn">Resume</button>
        </a>
			</div>
		</div>
		
		<div class="stats">
			<div class="box">
      <a href="https://www.linkedin.com/in/diante-hazelle-mclean-51916b221" target="_blank">
        <FaLinkedin size={20} color="#fffce2" />
        </a> 
				<span class="parameter">LinkedIn</span>
			</div>
			<div class="box">
      <a href="https://www.behance.net/dhazelle" target="_blank">
        <FaBehance size={20} color="#fffce2" />
        </a>
				<span class="parameter">Behance</span>
        
			</div>
			<div class="box">
      <a href="https://github.com/Diante830" target="_blank">
        <FaGithub size={20} color="#fffce2" />
        </a>
				<span class="parameter">Github</span>
			</div>
		</div>
  </div>
</div>

  );
};

export default Card;