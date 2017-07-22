import React, {Component} from 'react'
import '../css/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <video className = "video"  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>p>
          <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"/>
          <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
}
