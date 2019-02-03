import {fork} from 'redux-saga/effects'
import {fetchPostWatch} from "./post";

export default function* () {
    yield fork(fetchPostWatch)

}