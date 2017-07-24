import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showActiveChapter} from '../../filters'
import './style.css'

class SubBar extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render () {
    const {content} = this.props
    return (
      <div className = "subBar" >{content}</div>
    )
  }
}

export default connect ((state) => ({
  content: showActiveChapter(state)})) (SubBar)
//Continue code here!!!
