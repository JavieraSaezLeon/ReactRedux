import React, { Component } from 'react'
import './App.scss'
import Form from '../modules/list/Form'

class App extends Component {
  render() {
    return (
      <div className="pokemon-list-container">
        <h1>ShipNow</h1>
        {this.props.children}
        <Form />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
}

export default App
