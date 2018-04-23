import * as types from '../actions/action-types'

const current = (state = { movie: '', city: '' }, action) => {

    const payload = action.payload || {}
    const { id } = payload

    switch(action.type) {

        case types.SET_CURRENT_MOVIE: {
            state = { movie: id }
            break
        }

        case types.SET_CURRENT_CITY: {
            state = { city: id }
            break
        }        

    }

    return state

}

export { current as CurrentReducer }