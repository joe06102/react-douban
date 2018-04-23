import React from 'react'
import { connect } from 'react-redux'
import styles from './index.css'

const MovieCard = ({ movie, style }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p>{ movie.summary }</p>
            </div>
        </div>
    )
}

export { MovieCard }