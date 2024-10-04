import React from 'react';
import './About.css';

const AboutUs =()=>{
    return(
        <div className="about-container">
          <div className="about-image">
            <img src="about.jpeg"/>
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <h3>Crafting Tomorrow:Fostering Innovationand Shared Expertise for a Better Future.</h3>
            <p>
                Raisonminds Solutions: A Premier IT services firm driving digital transformation.Partner with us for innovative solutions and transformative strategies.
            </p>
            <a href="/learn-more">Learn More</a>
          </div>
        </div>
    );
};
export default AboutUs;