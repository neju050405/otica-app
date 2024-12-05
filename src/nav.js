import React from "react";
import './nav.css';
import logoMark from "./img/logoMark.png";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src={logoMark}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link" href="#">Sobre Nós</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#brands">Marcas</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#endereços">Endereços</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
