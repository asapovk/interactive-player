import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {focuseOnChapter} from '../../AC'
import {selectChapter} from '../../filters'
import {connect} from 'react-redux'
import Word from '../Word'
import './style.css'

class Chapter extends Component  {

  handleFocuseOnChapter = () => {
    this.props.focuseOnChapter(this.props.chapter)
  }

  applyFocusedStyle = () => {
    if(this.props.focused) return 'focused'
    return ''
  }


  render () {
    const {chapter} = this.props
    return (
      <a onClick = {this.handleFocuseOnChapter} className={this.applyFocusedStyle()+" chapter"}>{chapter.text}</a>
    )
  }
}

export default connect((state, ownProps)=>({
  focused: selectChapter(state, ownProps.chapter)
  }), {focuseOnChapter})(Chapter)
