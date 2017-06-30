import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Column extends Component {
  toggle = (column, visible) => {
    this.props.toggle(column, visible)
  }

  render () {
    let {name, visible} = this.props

    return (
      <div>
        <input
          type='checkbox'
          value={name}
          name={name}
          id={name}
          onChange={this.toggle.bind(this, name, visible)}
          checked={visible}
        />
        <label htmlFor={name}>{name}</label>
      </div>
    )
  }
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}
