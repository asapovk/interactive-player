import React , {Component} from 'react'
import PlayerWrap from './PlayerWrap/'
import ChapterList from './ChapterList/'
import SubBar from './SubBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Hello world</div>
        <PlayerWrap/>
        <SubBar/>
        <ChapterList/>
      </div>
    )
  }
}
