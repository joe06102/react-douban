import { call, put } from 'redux-saga/effects'
import * as types from '../actions/action-types'
import { getMoviesInTheater } from '../requests/movie-request'

function* bannerSaga() {

    console.log('banner saga starts')
    yield put({ type: types.FETCHING_MV_IN_THEATER })

    const payload = yield call(getMoviesInTheater, '杭州', 10)
    const mvs = payload && payload.subjects

    yield put({
        type: types.ADD_MOVIES,
        payload: mvs,
    })

    yield put({ type: types.FETCH_MV_IN_THEATER_DONE })
}

export default bannerSaga
