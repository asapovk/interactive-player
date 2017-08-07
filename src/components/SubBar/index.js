import React, {Component} from 'react'
import Word from '../Word'
import {connect} from 'react-redux'
import {showActiveChapter, makeArrayOfWords} from '../../filters'
import './style.css'

class SubBar extends Component {
  constructor(props, context) {
    super(props, context)
  }

  prepareContent = () => {
    const {array} = this.props
    const preparedArray = array.map((element)=>{
      if(element.includes('$')) {
        return (<Word id={element} key={element}/>)
      }
      else return element
    })
    return preparedArray
  }


  render () {
    const {content} = this.props
    return (
      <div className = "subBar" >{this.prepareContent()}</div>
    )
  }
}

export default connect ((state) => ({
  content: showActiveChapter(state),
  array: makeArrayOfWords(state)

})) (SubBar)
//Continue code here!!!
