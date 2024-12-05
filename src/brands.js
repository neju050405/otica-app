import React from "react";
import './brands.css';
import lavorato from './img/lavorato.png';
import rayban from './img/rayban.png';
import oakley from './img/oakley.png';
import signus from './img/signus.png';
import bulget from './img/bulget.jpg';
import disney from './img/disney.jpg';
import ecko from './img/ecko.png';
import essilor from './img/essilor.png';
import femmeparis from './img/femme-paris.jpg';
import fhocus from './img/fhocus.png';
import fiamma from './img/fiamma.png';
import jeanpierre from './img/jean-pierre.png';
import malakoff from './img/malakoff.png';
import nike from './img/nike.png';
import romano from './img/romano.jpg';
import sabrinasato from './img/sabrina-sato.png';
import speedo from './img/speedo.jpg';
import vertz from './img/vertz.png';
import vogue from './img/vogue.png';

const Brands = () => {
    return (
        <div className="brands" id="brands">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={rayban} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={lavorato} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={oakley} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={signus} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={bulget} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={disney} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={ecko} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={essilor} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={femmeparis} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={fhocus} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={fiamma} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={jeanpierre} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={lavorato} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={malakoff} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={nike} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={romano} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={sabrinasato} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={signus} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={speedo} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={vertz} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={vogue} class="d-block w-50" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Brands;
