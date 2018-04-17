import bannerSaga from './banner'
import * as types from '../actions/action-types'
import { takeEvery, call, take } from 'redux-saga/effects';

function* rootSaga() {
    yield take(types.ADD_MOVIES_ASYNC)
    yield call(bannerSaga)
}

export { rootSaga }