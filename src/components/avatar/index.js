import React from 'react';
import styles from './index.css';

export const Avatar = ({src, alt, style}) => {

    // getBase64(src).then(data => {
    //     console.log(data)
    // })

    return (
        <div className={styles.wrap} style={style}>
            <img src={src} className={styles.cover} alt={alt}/>
            <p className={styles.title} title={alt}>{alt}</p>
        </div>
    );
};