import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { MovieCard } from './card'
import styles from './index.css'
import * as types from '../../actions/action-types'

const mapStateSelector = id => state => {
    
    const movies = state.movies
    const movie = movies.filter(m => m.id === id)[0] || {}

    return {
        movie
    }
}


class MovieCardContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { id, dispatch } = this.props

        console.log(id)

        // dispatch({
        //     type: types.ADD_MOVIE_ASYNC,
        //     payload: id
        // })
    }

    render() {
        const { id,dispatch } = this.props
        dispatch({
            type: types.ADD_MOVIE_ASYNC,
            payload: id
        })
        return connect(mapStateSelector(id))(MovieCard)
    }
}

export { MovieCard, MovieCardContainer }