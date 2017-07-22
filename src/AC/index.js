import {LOAD_ALL_CHAPTERS, START, SUCCESS, FAIL, PLAYER} from '../constants'

export function loadAllChapters() {
    return {
        type: LOAD_ALL_CHAPTERS,
        callAPI: '/api/chapters'
    }
}


export function trackPlayerState(player) {
  //console.log(player)
  return {
    type: PLAYER,
    payload: player
  }
}
