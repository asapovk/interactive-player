import {OrderedMap, Record} from 'immutable';
import {PLAYER, FOCUSE_ON_CHAPTER} from '../constants';

const ReducerState = Record({
 currentTime: 0,
 newCurrentTime: 0,
 changeChapter: false
})

const defaultState = new ReducerState()

export default (playerState = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case PLAYER:
      //console.log(payload)
      return playerState.set('currentTime', payload).set('changeChapter', false)
    case FOCUSE_ON_CHAPTER:
      console.log('FOCUSED ON ' + payload)
      return playerState.set('newCurrentTime', payload).set('changeChapter', true)
  }
  return playerState
}

// Code HERE!!!
