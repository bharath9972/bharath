import React from 'react';
import './Services.css';

const Services=()=>{
    return(
        <div className="services-container">
            <div className="services-header">
                <h1>Services</h1>
                <h2>Strategy & Solutions</h2>
                <p>
                    Here in Raisonminds,we create tailored products based on client needs.We have a very talentedteam who can build the products with rich user experience and higher customizability.
                </p>
            </div>

            <div className="services-list">
                <div className="service-item">
                    <img src="roadmap.png"/>
                    <h3>Road Map creation</h3>
                    <p>
                        We help you create a roadmap for your business ideas to make a digital presence.
                    </p>
                </div>
                <div className="service-item">
                    <img src="roadmap.png"/>
                    <h3>IT Consultancy</h3>
                    <p>
                        Raisonmindsoffers software consultancy services along with other oriented services.
                    </p>
                </div>
                <div className="service-item">
                    <img src="research.jpeg"/>
                    <h3>Case study & Research</h3>
                    <p>
                        We offer case study and research for any of your business development needs.
                    </p>
                </div>
            </div>
        </div>

    );  
};
export default Services;