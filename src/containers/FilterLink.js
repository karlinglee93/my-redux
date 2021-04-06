import React from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'

const mapStateFromProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchFromProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateFromProps, 
  mapDispatchFromProps
)(Link)