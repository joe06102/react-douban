import * as types from '../actions/action-types'

const movie = (state = {}, action) => {

    switch (action.type) {

        case types.ADD_MOVIE: {

            const mv = action.payload
            state = { ...state, ...{ [mv.id]: mv } }

            return state
        }

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

        default: {
            return state
        }
    }
}

export { movie as MovieReducer }