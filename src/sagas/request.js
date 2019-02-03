import {call, put, select} from 'redux-saga/effects'

export default function* (fn, args) {
    try {
        const response = yield (fn, args)
        return response
    } catch (error) {
        console.log(error)
    }

}