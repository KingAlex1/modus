import {createActions} from 'redux-actions'

export const {
    fetchPostStart,
    fetchPostSuccess,
    fetchPostFailure
} = createActions(
    'FETCH_POST_START',
    'FETCH_POST_SUCCESS',
    'FETCH_POST_FAILURE'
)

