import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { MovieCard } from './card'
import styles from './index.css'
import * as types from '../../actions/action-types'

class MovieCardWrapper extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { dispatch, match } = this.props
        const { params } = match || {}
        const { id } = params || {}

        dispatch({
            type: types.ADD_MOVIE_ASYNC,
            payload: {
                id
            }
        })
        dispatch({
            type: types.SET_CURRENT_MOVIE,
            payload: {
                id
            }
        })
    }

    render() {
        const { movie } = this.props

        return (<MovieCard movie={movie}/>)
    }
}

const mapState = state => {
    
    const curMovieId = state.current.movie
    const movie = state.movies[curMovieId] || {}

    return {
        movie
    }
}

const MovieCardContainer = connect(mapState)(MovieCardWrapper)
export { MovieCard, MovieCardContainer }