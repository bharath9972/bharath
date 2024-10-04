import React from 'react';
import './Home.css';

const Home=()=>{
    return(
        <div className="home-container">
            <div className="home-section">
                <div className="home=content">
                    <h1>Empowering Your Digital Future with Raisonminds</h1>
                    <p>
                        With a commitment to excellence, we provide innovative solutions that drive your business growth and shape a prosperous digital future.
                    </p>
                    <button className="home-button">Connect with our specialist</button>
                </div>
                <div className="home-image">
                    <img src="banner-image.png"/>
                </div>
            </div>

            <div className="tech-transform-sextion">
                <div className="tech-transform-content">
                    <h2>We are transforming business through technology</h2>
                    <p>Revolitionize your business with our cutting-edge technology solutions.
                        Experience a seamless transformation that maximizes efficiency and drives growth.
                    </p>
                    <button className="transform-button">Know more</button>
                </div>
                <div className="tech-services">
                    <div className="service-box it-consultancy">
                        <h3>IT Consultancy</h3>
                    </div>
                    <div className="service-box web-development">
                        <h3>Web Development</h3>
                    </div>
                    <div className="service-box expert-professional">
                        <h3>Expert & Professional</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;