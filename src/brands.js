import React from "react";
import './brands.css';
import lavorato from './img/lavorato.png';
import rayban from './img/rayban.png'
import oakley from './img/oakley.png'

const Brands = () => {
    return (
        <div className="brands" id="brands">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={oakley} class="d-block w-50" />
                    </div>
                    <div class="carousel-item">
                        <img src={rayban} class="d-block w-50" />
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