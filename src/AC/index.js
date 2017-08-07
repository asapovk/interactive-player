import {LOAD_ALL_CHAPTERS, START, SUCCESS, FAIL, PLAYER, FOCUSE_ON_CHAPTER, LOAD_ALL_WORDS} from '../constants'

export function loadAllChapters() {
    return {
        type: LOAD_ALL_CHAPTERS,
        callAPI: '/api/chapters'
    }
}
export function loadAllWords() {
  return {
    type: LOAD_ALL_WORDS,
    callAPI: '/api/words'
  }
}


export function trackPlayerState(player) {
  //console.log(player)
  return {
    type: PLAYER,
    payload: player
  }
}

export function focuseOnChapter(chapter) {
  return {
    type: FOCUSE_ON_CHAPTER,
    payload: chapter.startTime
  }
}
