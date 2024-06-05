import React from 'react';

import Service from '../components/layout/Service';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home_container}>
            <Service />
        </div>
    );
}

export default Home;
