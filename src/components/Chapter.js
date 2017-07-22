import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default function Chapter ({chapter}) {
  return (
    <li>{chapter.text}</li>
  )
}
