import React from 'react';
import styles from './index.css';

export const Avatar = ({src, alt, style}) => {
    return (
        <div className={styles.wrap} style={style}>
            <img src={'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508546069.jpg'} className={styles.cover} alt={alt}/>
            <p className={styles.title} title={alt}>{alt}</p>
        </div>
    );
};