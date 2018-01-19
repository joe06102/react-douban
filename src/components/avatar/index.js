import React from 'react';
import styles from './index.css';

const getBase64 = src => {

    return fetch(src).then(res => {
        res.arrayBuffer().then(buf => {

            let bufStr = ''
            const dataUri = 'data:image/jpeg;base64,'
            const bufArray = [].slice.call(new Uint8Array(buf))

            bufArray.forEach(b => bufStr += String.fromCharCode(b))

            return Promise.resolve(dataUri + btoa(bufStr))
        })
    })
}

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