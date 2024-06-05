import React from 'react';

import Funcionamento from '../components/layout/Funcionamento';
import Maps from '../components/layout/Maps';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact_container}>
            <Funcionamento />

            <Maps />
        </div>
    );
}

export default Contact;
