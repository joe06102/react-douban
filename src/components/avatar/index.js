import React from 'react';
import styles from './index.css';
import { Encode } from '../../utils/encode'

const proxy = 'http://localhost:3003'

export const Avatar = ({src, alt, style}) => {

    const renderImg = (node) => {

        const options = {
            method: 'POST',
            body: src,
        }

        Encode.getImgBase64ByUrl(proxy, options).then(dataUri => {
            node && (node.src = dataUri)
        })
    }

    return (
        <div className={styles.wrap} style={style}>
            <img src={null} className={styles.cover} alt={alt} ref={renderImg}/>
            <p className={styles.title} title={alt}>{alt}</p>
        </div>
    );
};