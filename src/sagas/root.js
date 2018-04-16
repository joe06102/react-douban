import bannerSaga from './banner'
import * as types from '../actions/action-types'
import { takeEvery } from 'redux-saga/effects';

function* rootSaga() {
    console.log('start add movie async listener')
    yield takeEvery(types.ADD_MOVIES_ASYNC, bannerSaga)
    console.log('end add movie async listener')
}

export { rootSaga }