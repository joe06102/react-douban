import React from 'react'
import styles from './index.css'

const Loading = (WrappedComponent) => props => {

    const { loading, style } = props

    return (
        <div class={styles.wrapper}>
            <WrappedComponent { ...props }/>
            <div class={styles.overlay} style={{
                display: loading ? 'inline-block' : 'none'
            }}>
                <div class={styles.spinner}></div>            
            </div>
        </div>
    )
}

export { Loading }