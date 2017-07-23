import {createSelector} from 'reselect'

const changeChapterGetter = state => state.player.changeChapter

export const changeChapterSelector = () => createSelector(changeChapterGetter,  (changeChapter) => {
    return changeChapter
})
