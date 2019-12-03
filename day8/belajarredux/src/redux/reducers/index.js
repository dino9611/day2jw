import {combineReducers} from 'redux'
import Counter from './counterReducer'
import Hitungkata from './hitungkatareducer'
import BayarPark from './bayarparkirreducers'

export default combineReducers({
    bebas:Counter,
    hitungkata:Hitungkata,
    BayarParkir:BayarPark
})