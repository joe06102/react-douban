import React from 'react'
import { connect } from 'react-redux'
import styles from './index.css'

const MovieCard = ({ movie, style }) => {
    return (
        <div style={styles.wrapper}>
            <p>{ movie.summary }</p>
        </div>
    )
}

export { MovieCard }