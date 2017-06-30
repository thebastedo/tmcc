import React, { Component } from 'react'
import axios from 'axios'

import Columns from './Components/Columns'
import DataTable from './Components/DataTable'

import 'fixed-data-table-2/dist/fixed-data-table.css' // eslint-disable-line
import styles from './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      data: null,
      columns: new Map()
    }
  }

  componentDidMount () {
    axios.get('/data.json').then((response) => {
      let columns = new Map()
      if (response.data && response.data.length && response.data[0]) {
        Object.keys(response.data[0]).forEach((column, i) => {
          let visible = i < 10
          columns.set(column, { name: column, visible: visible, locked: false })
        })
      }
      this.setState({loading: false, data: response.data, columns})
    })
  }

  toggleColumn = (column, visible) => {
    let columns = new Map(this.state.columns)
    let toggleColumn = columns.get(column)
    toggleColumn.visible = !visible
    columns.set(column, toggleColumn)

    this.setState({columns})
  }

  toggleLock = (column, locked) => {
    let columns = new Map(this.state.columns)
    let lockColumn = columns.get(column)
    lockColumn.locked = !locked
    columns.set(column, lockColumn)
    this.setState({columns})
  }

  render () {
    if (this.state.loading || !this.state.data) {
      return (
        <div>Loading Data</div>
      )
    }

    let columns = Array.from(this.state.columns.values())

    let tableColumns = columns.filter((column) => {
      return column.visible
    })

    return (
      <div>
        <Columns columns={columns} toggle={this.toggleColumn}/>
        <DataTable columns={tableColumns} data={this.state.data} toggleLock={this.toggleLock}/>
      </div>
    )
  }
}
