import React from "react";
import './services.css';
import loja from './img/loja.jpg';
import consultas from './img/consultas.jpg'

const Services = () => {
    return (
        <div className="services" id="brands">
            <div className="service-container">
                <img url={loja}/>
                <h1></h1>
            </div>
            <div className="service-container">
                <img url={consultas}/>
                <h1></h1>
            </div>
            <div className="service-container">
                <img url=""/>
                <h1></h1>
            </div>
        </div>
    )
}

export default Services;