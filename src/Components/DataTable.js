import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Column, Cell } from 'fixed-data-table-2'

const TextCell = ({rowIndex, data, col, ...props}) => {
  let value = data[rowIndex][col]
  if (typeof value === 'string' && value.indexOf('http') === 0 ) {
    value = <a href={data[rowIndex][col]} target='_blank'>{data[rowIndex][col]}</a>
  }
  return (
    <Cell {...props}>
      {value}
    </Cell>
  )
}

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>{new Date(data[rowIndex][col]).toLocaleString()}</Cell>
)

export default class DataTable extends Component {
  constructor (props) {
    super(props)

    let columnWidths = {}
    this.state = { columnWidths }
  }

  onColumnResizeEnd = (newColumnWidth, columnKey) => {
    this.setState(({columnWidths}) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth
      }
    }))
  }

  toggleLock = (column, locked) => {
    this.props.toggleLock(column, locked)
  }

  render () {
    return (
      <div>
        <h1>Data Table</h1>
        <Table
          rowHeight={50}
          rowsCount={this.props.data.length}
          width={1000}
          height={500}
          headerHeight={50}
          onColumnResizeEndCallback={this.onColumnResizeEnd}
          isColumnResizing={false}>
          {this.props.columns.map((column) => {
            let cell = <TextCell data={this.props.data} col={column.name}/>
            let width = this.state.columnWidths[column.name] || 100

            if (column.name === 'timestamp') {
              cell = <DateCell data={this.props.data} col={column.name}/>
              width = 185
            }
            return (
              <Column
                key={column.name}
                columnKey={column.name}
                header={<Cell onClick={this.toggleLock.bind(this, column.name, column.locked)}>{column.name}</Cell>}
                cell={cell}
                isResizable={true}
                width={width}
                fixed={column.locked}
              />
            )
          })}
        </Table>
      </div>
    )
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  toggleLock: PropTypes.func.isRequired
}
