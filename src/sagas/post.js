import {
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFailure
} from "../actions/post";
import {takeLatest, call, put ,select} from "redux-saga/effects";
import {fetchPost} from "../api/api";
import requestFlow from '../sagas/request'

export function* fetchPostSaga() {
    try {
        let response = yield  select(fetchPost)
        console.log(response)
        yield put(fetchPostSuccess(response))
    } catch (error) {
        yield put(fetchPostFailure(error))
    }
}

export function* fetchPostWatch () {
    yield takeLatest(fetchPostStart,fetchPostSaga)
}