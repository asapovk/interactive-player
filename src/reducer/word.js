import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'
import {LOAD_ALL_WORDS, START, SUCCESS} from '../constants'

const WordRecord = Record({
    id: undefined,
    word: undefined,
    reading: undefined,
    meaning: undefined,
    loading: false,
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (wordState = defaultState, action) => {
  const {type, response} = action
  switch (type) {
    case LOAD_ALL_WORDS + START:
      return wordState.set('loading', true)
    case LOAD_ALL_WORDS + SUCCESS:
        return wordState.set('loading', false)
                        .set('loaded', true)
                        .set('entities', arrToMap(response, WordRecord))
  }
  console.log(wordState.entities.get('$dgk237bo873'))
  return wordState
}
