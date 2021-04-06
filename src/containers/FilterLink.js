import React from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'

const mapStateFromProps = (state, ownProps) => ({
  filter: ownProps.filter
})

const mapDispatchFromProps = (dispatch, ownProps) => ({
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateFromProps, 
  mapDispatchFromProps
)(Link)