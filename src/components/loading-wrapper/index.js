import React from 'react'
import styles from './index.css'

const Loading = (WrappedComponent) => props => {

    const { loading, style } = props

    return (
        <div className={styles.wrapper}>
            <WrappedComponent { ...props }/>
            <div className={styles.overlay} style={{
                display: loading ? 'inline-block' : 'none'
            }}>
                <div className={styles.spinner}></div>            
            </div>
        </div>
    )
}

export { Loading }