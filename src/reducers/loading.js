import * as types from '../actions/action-types'

const loading = (state = {}, action) {

    const actionType = action.type

    switch(actionType) {

        case types.FETCHING_MV_IN_THEATER {
            state = { ...state, ...{ [types.FETCHING_MV_IN_THEATER]: 1, [types.FETCH_MV_IN_THEATER_DONE]: 0 } }
            return state
        }

        default: {
            return state
        }
    }
}