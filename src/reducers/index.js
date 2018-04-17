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

const currentCity = (state = '杭州', action) => {

    switch(action.type) {
        
        case types.SET_CURRENT_CITY: {
            state = action.payload
            break
        }

    }

    return state
}

export { MovieReducer, InTheaterReducer, ComingSoonReducer } from './movie'
export { LoadingReducer } from './loading'
export { celebrity as celebrityReducer, cities as citiesReducer, currentCity as currentCityReducer };