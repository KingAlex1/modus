import {
    socketsConnections,
    socketsDisconnections,
    socketsMessageReceiving,
    socketsMessageSending
} from '../actions/message'

import {handleActions} from 'redux-actions'

const initialState = {
    loaded: false,
    massage: 'Just created',
    connected: false
}

export const message = handleActions({
    [socketsConnections]: (state, action) => ({
        ...state,
        loaded: true,
        message: 'Connection...',
        connected: false
    }),
    [socketsDisconnections]: (state, action) => ({
        ...state,
        loaded: true,
        massage: 'Disconnected...',
        connected: true

    }),
    [socketsMessageSending]: (state, action) => ({
        ...state,
        loaded: true,
        massage: 'Send message',
        connected: true
    }),
    [socketsMessageReceiving]: (state, action) => ({
        ...state,
        loaded: true,
        message: 'Message receive',
        connected: true
    })

}, initialState)

export default message;