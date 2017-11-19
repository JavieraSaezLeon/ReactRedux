import { combineReducers } from 'redux'
import OrderListReducer from './modules/list'

const reducers = combineReducers({
  list: OrderListReducer,
})

export default reducers
