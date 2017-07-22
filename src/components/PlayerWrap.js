import React, {Component} from 'react'
import {Player} from 'video-react'
import "video-react/dist/video-react.css"

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
}


export default class PlayerWrap extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      source: sources['bunnyMovie']
    }

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.load = this.load.bind(this)
    this.changeCurrentTime = this.changeCurrentTime.bind(this)
    this.seek = this.seek.bind(this)
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
    this.setMuted = this.setMuted.bind(this)
  }

  componentDidMount() {
      // subscribe state change
      this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play()
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState()
      const currentTime = player.currentTime
      this.refs.player.seek(currentTime + seconds)
    }
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds)
    }
  }

  changePlaybackRateRate(steps) {
     return () => {
       const { player } = this.refs.player.getState()
       const playbackRate = player.playbackRate
       this.refs.player.playbackRate = playbackRate + steps
     }
   }

   changeVolume(steps) {
     return () => {
       const { player } = this.refs.player.getState()
       const volume = player.volume;
       this.refs.player.volume = volume + steps
     }
   }

   setMuted(muted) {
       return () => {
         this.refs.player.muted = muted;
       };
     }

   changeSource(name) {
     return () => {
       this.setState({
         source: sources[name]
       })
       this.refs.player.load()
     }
   }

  render() {
  //  console.log(this.state.player)
    return (
        <Player ref="player">
          <source src={this.state.source}/>
        </Player>
    )
  }
}
