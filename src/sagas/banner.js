import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as types from '../actions/action-types'
import { MOVIES } from './constants'
import { getMoviesInTheater } from '../requests/movie-request'

function* bannerSaga() {

    yield put({ type: types.FETCHING_MV_IN_THEATER })

    let moviesMap
    const cache = localStorage.getItem(MOVIES)

    try {
        moviesMap = JSON.parse(cache)
    } catch(e) {
        console.log(e)
    }

    if(moviesMap) {
        yield delay(2000)
        yield put({
            type: types.ADD_MOVIES,
            payload: Object.keys(moviesMap).map(k => moviesMap[k]),
        })
    } else {
        const payload = yield call(getMoviesInTheater, '杭州', 10)
        const mvs = payload && payload.subjects
        yield put({
            type: types.ADD_MOVIES,
            payload: mvs,
        })
        localStorage.setItem(MOVIES, JSON.stringify(mvs))            
    }

    yield put({ type: types.FETCH_MV_IN_THEATER_DONE })
}

export default bannerSaga
