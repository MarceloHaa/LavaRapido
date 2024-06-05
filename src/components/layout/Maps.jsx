import React from 'react';
import styles from './Map.module.css';

function Maps() {
    return (
        <div>
            <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.56193960487!2d-47.066650624913514!3d-22.855691079291077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c67c2d375f6f%3A0x8bd2415c91a89fe2!2sLava%20R%C3%A1pido%20das%20Meninas!5e0!3m2!1spt-PT!2sbr!4v1715629473239!5m2!1spt-PT!2sbr"
                width="1200"
                height="600"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <address className={styles.endereco}>
                Endereço: R. Joaquim Manuel de Macedo, 223 - Jardim Santa
                Genebra, Campinas - SP, 13080-470 Telefone: (19) 97410-7607
            </address>
        </div>
    );
}

export default Maps;
