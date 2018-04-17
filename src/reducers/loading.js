import * as types from '../actions/action-types'

const loading = (state = { bannerLoading: false }, action) => {

    const actionType = action.type

    switch(actionType) {

        case types.FETCHING_MV_IN_THEATER: {
            state = { ...state, ...{ bannerLoading: true } }
            return state
        }

        case types.FETCH_MV_IN_THEATER_DONE: {
            state = { ...state, ...{ bannerLoading: false } }
            return state
        }        

        default: {
            return state
        }
    }
}

export { loading as LoadingReducer }