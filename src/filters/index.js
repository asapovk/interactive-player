export function selectChapter (state, chapter) {
  const currentTime = state.player.currentTime
  const {startTime, duration} = chapter
  if (startTime <= currentTime && currentTime <= startTime + duration) return true
  //console.log(currentTime);
  return false
}

function isChapterActive(currentTime, chapter) {
  const startTime = chapter.get('startTime')
  const duration = chapter.get('duration')
  //const {startTime, duration} = chapter
  //console.log(chapter.get('text'))
  if (startTime <= currentTime && currentTime <= startTime + duration) {
     return true
  }
  return false
}

export function showActiveChapter(state) {
//  console.log('Show Active Chapter is called');
  const chapters = state.chapter.entities.toArray()
  //console.log(chapters)
  const currentTime = state.player.currentTime
  for (var i=0; i < chapters.length; i++) {
    if(isChapterActive(currentTime, chapters[i])) return chapters[i].get('text')

  }
  return null

}

export function makeArrayOfWords(state) {
    //var array = []
    //console.log(showActiveChapter(state)+'showActiveChapter')
    const string = showActiveChapter(state)
    var array = []
    if(string) {
      array = string.split('@');
    }
  return array
}
