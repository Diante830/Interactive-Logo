import React from 'react';
import './Card.css'; 

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
				<button class="btn">Portfolio</button>
				<button class="btn">Resume</button>
			</div>
		</div>
		
		<div class="stats">
			<div class="box">
				<span class="value">523</span>
				<span class="parameter">LinkedIn</span>
			</div>
			<div class="box">
				<span class="value">1387</span>
				<span class="parameter">Behance</span>
			</div>
			<div class="box">
				<span class="value">146</span>
				<span class="parameter">Github</span>
			</div>
		</div>
  </div>
</div>

  );
};

export default Card;