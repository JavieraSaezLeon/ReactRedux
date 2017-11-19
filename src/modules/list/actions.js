export const FETCH_ORDER_LIST = 'FETCH_ORDER_LIST'
export const LOADING_ORDER_LIST = 'LOADING_ORDER_LIST'

export function fetchOrderList() {
  return dispatch => {
    dispatch({ type: LOADING_ORDER_LIST, payload: true })
    dispatch({ type: FETCH_ORDER_LIST, payload: [{ number: 1, name: 'Javiera Saez', originAddress: 'San Hugo', destinationAddress: 'Agua Santa', weight: 'Liviano' }, { number: 2, name: 'Patricio Vargas', originAddress: 'Agua Santa', destinationAddress: 'San Hugo', weight: 'livianito' }] })
  }
}
