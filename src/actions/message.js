import {createActions} from 'redux-actions'

export const {
    socketsConnections,
    socketsDisconnections,
    socketsMessageSending,
    socketsMessageReceiving
} = createActions(
    'SOCKETS_CONNECTING',
    'SOCKETS_DISCONNECTING',
    'SOCKETS_MESSAGE_SENDING',
    'SOCKETS_MESSAGE_RECEIVING'
)