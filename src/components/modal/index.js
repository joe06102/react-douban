import React from 'react'
import styles from './index.css'

const Modal = ({ children, popup, style }) => {

    const mergeStyle = {
        display: popup ? 'block' : 'none',
        ...style
    }

    return (
        <div className={styles.wrapper} style={mergeStyle}>
        {
            children
        }
        </div>
    )
}