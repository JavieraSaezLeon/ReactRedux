import {
  FETCH_ORDER_LIST,
} from './actions'

const initialState = {
  data: '',
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_LIST:
      return { ...state, data: action.payload, loading: false }
    default:
      return state
  }
}
