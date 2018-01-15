import React from 'react'
import styles from './index.css'

export const Cover = ({src, title, rating, ratio = 1.42, style}) => {
    
    const compositeStyle = { ...style, ...{ width: style.width, height: style.width * ratio + 30 } }

    return (
        <div className={styles.wrap} style={compositeStyle}>
            <img className={styles.cover} src={src} alt={title}/>
            <p className={styles.title}>
                {title}
                <strong>{rating}</strong>
            </p>
        </div>
    )
}