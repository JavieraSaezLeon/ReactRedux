import React, { Component } from 'react'
import Row from '../Row'

class Table extends Component {
  constructor(props) {
    super(props)

    this.buildRows = this.buildRows.bind(this)
  }

  buildRows() {
    if (this.props.data) {
      return this.props.data.map((item) => {
        const order = {
          number: item.number,
          name: item.name,
          originAddress: item.originAddress,
          destinationAddress: item.destinationAddress,
          weight: item.weight,
        }

        return <Row key={order.number} order={order} />
      })
    }
    return <Row />
  }

  render() {
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Origin Address</th>
            <th>Destination Address</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default Table
