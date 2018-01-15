import React from 'react';
import styles from './index.css';

export const Avatar = ({src, alt, style}) => {
    return (
        <div className={styles.wrap} style={style}>
            <img src={src} className={styles.cover} alt={alt}/>
            <p className={styles.title}>{alt}</p>
        </div>
    );
};