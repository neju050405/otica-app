import React from "react";
import logoMark from "./img/logoMark.png";
import './navv.css';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a className="navbar-brand" href="#"><img src={logoMark} className="logoMark" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a className="nav-link" href="#">Sobre Nós</a>
                        <a className="nav-link" href="#brands">Marcas</a>
                        <a className="nav-link" href="#endereços">Endereços</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
