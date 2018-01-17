import * as types from '../actions/action-types'

const celebrity = (state = {}, action) => {
    return state;
}

const movie = (state = {}, action) => {

    switch(action.type) {

        case types.ADD_MOVIES: {
            
            if(Array.isArray(action.payload) && action.payload.length) {
                state = action.payload.reduce((prev, val) => {
                    prev[val.id] = val
                    return prev
                }, {})
            }

            break;
        }

    }

    return state;
}

const cities = (state = {}, action) => {
    return state;
}

export { celebrity as celebrityReducer, movie as movieReducer, cities as citiesReducer };