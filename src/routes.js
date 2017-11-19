import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import { Container as OrderList } from './modules/list'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={OrderList} />
    <Route path="orders" component={OrderList} />
  </Route>
)
