import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Column from './Column'

import styles from './Columns.css'

export default class Columns extends Component {
  render () {
    return (
      <div>
        <h1>Columns</h1>
        <div className={styles.columns}>
          {this.props.columns.map((column, i) => {
            return <Column key={i} {...column} toggle={this.props.toggle}/>
          })}
        </div>
      </div>
    )
  }
}

Columns.propTypes = {
  columns: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
}
