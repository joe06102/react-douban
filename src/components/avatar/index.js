import React from 'react';
import styles from './index.css';
import { Encode } from '../../utils/encode'

export const Avatar = ({key, src, alt, style}) => {
    return (
        <div key={key} className={styles.wrap} style={style}>
            <img src={src} className={styles.cover} alt={alt}/>
            <p className={styles.title} title={alt}>{alt}</p>
        </div>
    );
};