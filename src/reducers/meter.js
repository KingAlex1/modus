import {
    moveMeterToLeft,
    moveMeterToRight
} from '../actions/meter'
import {handleActions} from 'redux-actions'

const initialState = {
    left: 0
}

export const meter = handleActions({
    [moveMeterToLeft]: (state, action) => ({
        ...state,
        left: state.left - 100
    }),
    [moveMeterToRight]: (state, action) => ({
        ...state,
        left: state.left + 100
    })
}, initialState)

export const getMeter = state => state.meter.left

export default meter

