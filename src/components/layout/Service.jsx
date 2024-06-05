import React from 'react';
import { Link } from 'react-router-dom';

import style from './Service.module.css';

import servicos from '../../assets/img/servicos.jpg';

function Service() {
    return (
        <div>
            <Link to="/">
                <img
                    className={style.image_service}
                    src={servicos}
                    alt="servicos"
                />
            </Link>
            <ul className={style.servicos}>
                <li>Lavagem Simples e Especial</li>
                <li>Lavagem de motor</li>
                <li>Lavagem de Assoalho</li>
                <li>Enceramento com jetCera ou cera em pasta</li>
                <li>
                    Tratamento técnico de Pintura (remoção de contaminação da
                    lataria, chuva ácida, riscos superficiais)
                </li>
                <li>Polimento, Cristalização, Vitrificação</li>
                <li>Higienização completa (teto,bancos, carpete)</li>
                <li>Insufilm veicular (Aplicação e Remoção)</li>
            </ul>
        </div>
    );
}

export default Service;
