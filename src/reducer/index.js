import {combineReducers} from 'redux'
import chapter from './chapter'
import dummy from './dummy'
import dummy2 from './dummy2'
import player from './player'
import word from './word'

export default combineReducers({
    dummy: dummy,
    dummy2: dummy2,
    chapter,
    player,
    word
})
