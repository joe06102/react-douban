import * as types from '../actions/action-types'

const celebrity = (state = {}, action) => {

    switch(action.type) {
        case types.ADD_CELEBRITIES: {

            if(Array.isArray(action.payload) && action.payload.length) {

                const data = action.payload.reduce((prev, celeb) => {
                    
                    prev[celeb.id] = celeb

                    return prev
                }, {})

                state = { ...state, ...data }
            }

            break
        }
    }

    return state
}

const cities = (state = {}, action) => {
    return state;
}

export { MovieReducer, InTheaterReducer, ComingSoonReducer } from './movie'
export { CurrentReducer } from './current'
export { LoadingReducer } from './loading'
export { celebrity as celebrityReducer, cities as citiesReducer };