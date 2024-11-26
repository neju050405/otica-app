import React from "react";
import './locations.css';
import map from './img/map.png';

const Locations = () => {
    return (
        <div className="locations" id="endereços">
            <div className="location-left">
                <h1>Glória do Goitá</h1>
                <div className="location-content">
                    <div className="location-col1">
                        <h2>Endereço</h2>
                        <p>R. Me. de Deus, 145 - Centro,<br />
                            Glória do Goitá - PE,<br />
                             55620-000<br />
                            (81)996607481
                        </p>
                    </div>
                    <div className="location-col2">
                        <h2>Horário de Funcionamento</h2>
                        <p>7h30 - 18h00<br />
                        Segunda - Sexta<br /><br />
                        8h00 - 12h00<br />
                        Sábado</p>
                    </div>
                </div>
            </div>
            <div className="location-right">
                <h1>Lagoa do Itaenga</h1>
                <div className="location-content">
                    <div className="location-col1">
                        <h2>Endereço</h2>
                        <p>Av. São Sebastião - Centro, <br />
                            Lagoa do Itaenga - PE,<br />
                             55840-000<br />
                            (81)996607481
                        </p>
                    </div>
                    <div className="location-col2">
                        <h2>Horário de Funcionamento</h2>
                        <p>7h30 - 18h00<br />
                        Segunda - Sexta<br /><br />
                        8h00 - 12h00<br />
                        Sábado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations;
