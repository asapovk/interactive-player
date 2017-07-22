import {OrderedMap, Record} from 'immutable';
import {PLAYER} from '../constants';

const ReducerState = Record({
 currentTime: 0,
 dummyField: 'dummy'
})

const defaultState = new ReducerState()

export default (playerState = 0, action) => {
  const {type, payload} = action
  switch (type) {
    case PLAYER:
      //console.log(payload)
      return payload
  }
  return playerState
}
