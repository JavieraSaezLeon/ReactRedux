import React, { Component } from 'react'

class Row extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.order.number}</th>
        <td>{this.props.order.name}</td>
        <td>{this.props.order.originAddress}</td>
        <td>{this.props.order.destinationAddress}</td>
        <td>{this.props.order.weight}</td>
      </tr>
    )
  }
}

Row.propTypes = {
  order: React.PropTypes.shape({
    number: React.PropTypes.numeber,
    name: React.PropTypes.string,
    originAddress: React.PropTypes.string,
    destinationAddress: React.PropTypes.string,
    weight: React.PropTypes.string,
  }),
}

export default Row
