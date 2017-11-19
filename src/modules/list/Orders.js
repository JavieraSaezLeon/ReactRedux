import React, { Component } from 'react'

class Orders extends Component {
  render() {
    const { name, originAddress, destinationAddress, weight } = this.props
    return (
      <div className="order-item">
        <div className="order-main-data">
          <div className="order-name">
            {nameo}
          </div>
          <div className="order-originAddress">
            {originAddress}
          </div>
          <div className="order-destinationAddress">
            {destinationAddress}
          </div>
          <div className="order-weight">
            {weight}
          </div>
        </div>
      </div>
    )
  }
}
Products.propTypes = {
  name: React.PropTypes.string,
  originAddress: React.PropTypes.string,
  destinationAddress: React.PropTypes.string,
  weight: React.PropTypes.string,
}
export default Orders