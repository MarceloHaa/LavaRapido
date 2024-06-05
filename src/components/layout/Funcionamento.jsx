import React from 'react';

import styles from './Funcionamento.module.css';

function Funcionamento() {
    return (
        <div>
            <ul className={styles.funcionamento}>
                <h1>Horário</h1>
                <li>
                    Segunda-feira 08:30–18:00 (poucos horarios disponiveis pois
                    atendemos empresas)
                </li>
                <li>Terça-feira 08:30–18:00</li>
                <li>Quarta-feira 08:30–18:00</li>
                <li>Quinta-feira 08:30–18:00</li>
                <li>Sexta-feira 08:00–18:00</li>
                <li>Sábado 08:30–16:00</li>
            </ul>
        </div>
    );
}

export default Funcionamento;
