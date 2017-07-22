import {LOAD_ALL_CHAPTERS, START, SUCCESS, FAIL} from '../constants'

export function loadAllChapters() {
    return {
        type: LOAD_ALL_CHAPTERS,
        callAPI: '/api/chapters'
    }
}
