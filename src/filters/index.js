export function selectChapter (state, chapter) {
  const currentTime = state.player.currentTime
  const {startTime, duration} = chapter
  if (startTime <= currentTime && currentTime <= startTime + duration) return true
  //console.log(currentTime);
  return false
}
