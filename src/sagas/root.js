import { bannerSaga, pivotSaga } from './movie'
import * as types from '../actions/action-types'
import { takeEvery, call, fork, take } from 'redux-saga/effects';

function* rootSaga() {
    yield [take(types.ADD_MOVIE_IN_THEATER_ASYNC), take(types.ADD_MOVIE_COMING_SOON_ASYNC)]
    yield fork(bannerSaga)
    yield fork(pivotSaga)
}

export { rootSaga }