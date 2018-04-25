import * as types from '../actions/action-types'
import _ from 'lodash'

const movie = (state = {}, action) => {

    switch (action.type) {

        case types.ADD_MOVIE_IN_THEATER:
        case types.ADD_MOVIE_COMING_SOON:
        case types.ADD_MOVIES: {

            if (Array.isArray(action.payload) && action.payload.length) {

                const data = action.payload.reduce((prev, val) => {

                    prev[val.id] = val

                    return prev
                }, {})

                state = { ...state, ...data }
            }

            return state
        }

        case types.ADD_MOVIE: {

            const { payload } = action

            if(!_.isEmpty(payload)) {
                state = { ...state, [payload.id]: payload }
            }

            return state
        }

        default: {
            return state
        }
    }
}

const in_theater = (state = [], action) => {

    switch (action.type) {

        case types.ADD_MOVIE_IN_THEATER: {

            if (Array.isArray(action.payload) && action.payload.length) {
                const mvs = action.payload
                const ids_to_add = mvs.filter(mv => state.findIndex(id => id === mv.id) < 0).map(mv => mv.id)

                state = state.concat(ids_to_add)
            }

            return state
        }

        default: {
            return state
        }
    }    
}

const coming_soon = (state = [], action) => {

    switch (action.type) {

        case types.ADD_MOVIE_COMING_SOON: {

            if (Array.isArray(action.payload) && action.payload.length) {
                const mvs = action.payload
                const ids_to_add = mvs.filter(mv => state.findIndex(id => id === mv.id) < 0).map(mv => mv.id)

                state = state.concat(ids_to_add)
            }

            return state
        }

        default: {
            return state
        }
    }    
}

export { movie as MovieReducer, in_theater as InTheaterReducer, coming_soon as ComingSoonReducer }