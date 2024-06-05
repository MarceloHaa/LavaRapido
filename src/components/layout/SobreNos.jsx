import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SobreNos.module.css';
import lava from '../../assets/img/logo_lava.jpg';

function SobreNos() {
    return (
        <div className={styles.conteudo}>
            <Link>
                <img className={styles.lava} src={lava} alt="Lava rápido" />
            </Link>
            <h1>Quem Somos</h1>

            <p>
                Nossa história começou em 2015 quando as proprietárias sentiram
                a necessidade de um lava rápido que tivesse o carinho, o cuidado
                e a atençao aos detalhes que só mulheres podem dar. E ao longo
                desse tempo nos tornamos referência em lavagens automotivas,
                polimentos e detalhamento automotivo, somos uma empresa que
                oferece o cuidado ideal para veiculos e motos. Contamos com uma
                equipe completa de profissionais altamente qualificados e
                treinados, prontos para promoverem serviços de primeira linha e
                um atendimento leve e personalizado. Atendemos tambem empresas.
            </p>
        </div>
    );
}

export default SobreNos;
