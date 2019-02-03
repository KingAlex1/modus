import {
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFailure
} from '../actions/post'

import {handleActions} from 'redux-actions'

const initState = {
    isFetching: false,
    isFetched: false,
    posts: [],
    error: null
}

export const post = handleActions({
        [fetchPostStart]: (state, action) => ({
            ...state,
            isFetching: true,
            isFetched: false
        }),
        [fetchPostSuccess]: (state, action) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            posts: action.payload
        }),
        [fetchPostFailure]: (state, action) => ({
            ...state,
            isFetching: false,
            isFetched: true,
            error: action.error

        })
    },
    initState
)

export const getPost = state => state.post

export default post