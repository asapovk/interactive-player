import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'
import {LOAD_ALL_CHAPTERS, START, SUCCESS} from '../constants'

const ChapterRecord = Record({
    text: undefined,
    id: undefined,
    startTime: undefined,
    duration: undefined,
    loading: false,
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (chapterState = defaultState, action) => {
    const {type, response} = action
    switch (type) {

        case LOAD_ALL_CHAPTERS + START:
            return chapterState.set('loading', true)

        case LOAD_ALL_CHAPTERS + SUCCESS:
            return chapterState
                .set('entities', arrToMap(response, ChapterRecord))
                .set('loading', false)
                .set('loaded', true)

    }

    return chapterState
}
