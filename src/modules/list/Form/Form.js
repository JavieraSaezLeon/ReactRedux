import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className="Formulario">
        <h2>Registro orden de despacho</h2>
        <form>
          <label htmlFor="nameInput">Nombre:</label>
          <input name="nameInput" />
          <br />
          <label htmlFor="originAddressInput">Dirección de origen: </label>
          <input name="originAddressInput" />
          <br />
          <label htmlFor="destinationAddressInput">Dirección de destino: </label>
          <input name="destinationAddressInput" />
          <br />
          <label htmlFor="weightInput">Peso: </label>
          <input name="weightInput" />
          <br />
          <button type="submit"> Generar orden </button>
        </form>
      </div>
    )
  }
}

export default Form
