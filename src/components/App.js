import React , {Component} from 'react'
import PlayerWrap from './PlayerWrap'
import ChapterList from './ChapterList'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Hello world</div>
        <PlayerWrap/>
        <ChapterList/>
      </div>
    )
  }
}
