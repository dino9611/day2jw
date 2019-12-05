import {combineReducers} from 'redux'

import TokenReducers from './TokenReducer'

export default combineReducers({
    Token:TokenReducers
})