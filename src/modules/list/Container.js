import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOrderList } from '../list'

import View from './View'

function mapStateToProps(state) {
  return {
    orders: state.list.data,
    loading: state.list.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrderList: bindActionCreators(fetchOrderList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
