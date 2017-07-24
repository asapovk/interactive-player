import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadAllChapters} from '../../AC'
import Loader from '../Loader'
import Chapter from '../Chapter/'
import './style.css'

class ChapterList extends Component {
//  static propTypes = {
//    chapter: PropTypes.array.isRequired,
//    focuseItemId: PropTypes.string
//  }


  componentDidMount() {
    console.log('Component is mounted');
    const {loaded, loading, loadAllChapters} = this.props
    if (!loaded && !loading) loadAllChapters()
  }


  render () {
    //console.log('Props are')
    //console.log(this.props)
    const {chapters, loading} = this.props
    if(loading) return <Loader/>

    const chapterElements = chapters.map(chapter => <li key={chapter.id}>
      <Chapter chapter={chapter}/>
    </li>)
    return (
        <ul className = "chapterList">
            {chapterElements}
        </ul>
    )
  }

}


export default connect((state) => {
    return {
        chapters: state.chapter.entities,
        loading: state.chapter.loading,
        loaded: state.chapter.loaded
    }
}, {loadAllChapters})(ChapterList)
