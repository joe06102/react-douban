import { delay } from 'redux-saga'
import { call, put, take, fork } from 'redux-saga/effects'
import * as types from '../actions/action-types'
import { MOVIES_IN_THEATER, MOVIES_COMING_SOON } from './constants'
import { getMoviesInTheater, getMoviesComingSoon, getMovieDetails } from '../requests/movie-request'

//#region -- workers
export function* bannerSaga() {

    yield put({ type: types.FETCHING_MV_IN_THEATER })

    let moviesMap
    const cache = localStorage.getItem(MOVIES_IN_THEATER)

    try {
        moviesMap = JSON.parse(cache)
    } catch(e) {
        console.log(e)
    }

    if(moviesMap) {
        //yield delay(2000)
        yield put({
            type: types.ADD_MOVIE_IN_THEATER,
            payload: Object.keys(moviesMap).map(k => moviesMap[k]),
        })
    } else {
        const payload = yield call(getMoviesInTheater)
        const mvs = payload && payload.subjects
        yield put({
            type: types.ADD_MOVIE_IN_THEATER,
            payload: mvs,
        })
        localStorage.setItem(MOVIES_IN_THEATER, JSON.stringify(mvs))            
    }

    yield put({ type: types.FETCH_MV_IN_THEATER_DONE })
}

export function* pivotSaga() {

    //yield put({ type: types.FETCHING_MV_IN_THEATER })

    let moviesMap
    const cache = localStorage.getItem(MOVIES_COMING_SOON)

    try {
        moviesMap = JSON.parse(cache)
    } catch(e) {
        console.log(e)
    }

    if(moviesMap) {
        //yield delay(1500)
        yield put({
            type: types.ADD_MOVIE_COMING_SOON,
            payload: Object.keys(moviesMap).map(k => moviesMap[k]),
        })
    } else {
        const payload = yield call(getMoviesComingSoon)
        const mvs = payload && payload.subjects
        yield put({
            type: types.ADD_MOVIE_COMING_SOON,
            payload: mvs,
        })
        localStorage.setItem(MOVIES_COMING_SOON, JSON.stringify(mvs))            
    }

    //yield put({ type: types.FETCH_MV_IN_THEATER_DONE })
}

export function* currentSaga(id) {

    const res = yield call(getMovieDetails, id)

    yield put({
        type: types.ADD_MOVIE,
        payload: res
    })
}
//#endregion

//#region -- watchers
export function* currentWatcher() {
    while(true) {
        const action = yield take(types.ADD_MOVIE_ASYNC)
        const { payload } = action || {}
        const { id } = payload || {}

        if(id) {
            yield fork(currentSaga, id)
        } else {
            console.log(`invalid action: ${types.ADD_MOVIE_ASYNC}`)
        }
    }
}

export function* bannerWatcher() {
    yield take(types.ADD_MOVIE_IN_THEATER_ASYNC)
    yield fork(bannerSaga)
}

export function* pivotWatcher() {
    yield take(types.ADD_MOVIE_COMING_SOON_ASYNC)
    yield fork(pivotSaga)
}
//#endregion