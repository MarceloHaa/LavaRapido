import React from 'react';
import InstaFeed from '../components/layout/InstaFeed';
import styles from './Gallery.module.css';

function Gallery() {
    return (
        <div className={styles.gallery_container}>
            <InstaFeed />
        </div>
    );
}

export default Gallery;
