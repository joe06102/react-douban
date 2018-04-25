import { bannerWatcher, pivotWatcher, currentWatcher } from './movie'
import * as types from '../actions/action-types'
import { takeEvery, call, fork, take } from 'redux-saga/effects';

function* rootSaga() {
    yield [
        bannerWatcher(),
        pivotWatcher(),
        currentWatcher(),
    ]
}

export { rootSaga }