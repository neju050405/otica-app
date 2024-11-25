import React from "react";
import logo from "./img/logo.png";
import './cover.css';
import instagram from './img/instagram.png';
import gmail from './img/gmail.png';

const Cover = () => {
    return (
        <div className="cover" id="sobre">
            <div className="left-badge">
                <p>   A Ótica Rio tem mais de 20 anos de experiência, presente em Glória do Goitá e Lagoa do Itaenga. Nosso compromisso é cuidar da saúde visual de nossos clientes, oferecendo consultas oftalmológicas e uma ampla variedade de óculos de qualidade. Prezamos pelo atendimento especializado e personalizado, garantindo conforto e confiança em cada atendimento. Com tradição, dedicação e cuidado, estamos sempre ao lado de nossos clientes, oferecendo soluções que atendem às suas necessidades visuais com excelência.</p>
                <img src={logo} alt="logomark" className="left-badge-logo" />
            </div>
            <div className="right-badge">

            </div>

        </div>
    )
}

export default Cover;