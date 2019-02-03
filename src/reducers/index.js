import {combineReducers} from 'redux'
import {message} from './message'
import {meter} from './meter'
import {post} from './post'

export default combineReducers({message, meter, post})

