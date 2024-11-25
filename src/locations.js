import React from "react";
import './locations.css';
import map from './img/map.png';

const Locations = () => {
    return (
        <div className="locations">
            <div className="location-left">
                <div className="location-cel">(81)996607481</div>
                <div className="location-workin-hours">7h30 - 18h00
                    Segunda - Sexta</div>
                <div className="location-adress">
                    str. Cascalheira, 1800 - Parque Das Mangabas, Camaçari - BA, 42800-970
                    <img src={map} />
                </div>
            </div>
            <div className="location-right">
                <div className="location-cel">(81)996607481</div>
                <div className="location-workin-hours">7h30 - 18h00
                    Segunda - Sexta</div>
                <div className="location-adress">
                    str. Cascalheira, 1800 - Parque Das Mangabas, Camaçari - BA, 42800-970
                    <img src={map} />
                </div>
            </div>
        </div>
    )
}

export default Locations;