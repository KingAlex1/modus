import {createActions} from "redux-actions";



export const {
    moveMeterToLeft,
    moveMeterToRight
} = createActions(
    'MOVE_METER_TO_LEFT',
    'MOVE_METER_TO_RIGHT'
)