import React from 'react';
import "./About.css";
import admin from '../home/image/adminpanelimg.jpg'
function About() {
  return (
		<div>
			<div className="aboutMainWrapper">
				<img src={admin} alt="" />
			</div>
		</div>
	);
}

export default About;
