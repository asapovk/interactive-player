import React, {Component} from 'react'
import './style.css'
import {connect} from 'react-redux'

class Word extends Component {

  state = {showMeaning: false}

  handleShowMeaning = () => {
    this.setState({showMeaning: true})
  }
  handleHideMeaning = () => {
    this.setState({showMeaning: false})
  }

  colorBackground = () => {
    if (this.state.showMeaning) return ' word-colored'
    return ''
  }

  showMeaning = () => {
    if (this.state.showMeaning) return (<div className="wordMeaning">{this.props.content.meaning}</div>)
    return null
  }

  render () {
    const {content} = this.props
    return (
      <span className={"word"+this.colorBackground()} onMouseEnter={this.handleShowMeaning} onMouseLeave={this.handleHideMeaning}>{content.word}{this.showMeaning()}</span>
    )
  }
}


export default connect((state, ownProps)=>({content: state.word.entities.get(ownProps.id)}))(Word)
