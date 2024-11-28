import React, { Children } from "react";
import logoMark from "./img/logoMark.png";
import './nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logoMark} className="logoMark" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#brands">Marcas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre">Redes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#endereços">Endereços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fale Conosco</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
