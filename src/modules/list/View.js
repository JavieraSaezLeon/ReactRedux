import React, { Component } from 'react'
import Table from './Table'

class View extends Component {
  componentDidMount() {
    this.props.fetchOrderList()
  }

  buildContent() {
    if (this.props.loading) {
      return (
        <h2>Loading...</h2>
      )
    }
    return (
      <Table data={this.props.orders} />
    )
  }

  render() {
    return this.buildContent()
  }
}

View.propTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
  fetchOrderList: React.PropTypes.func,
}

export default View
