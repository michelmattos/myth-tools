import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './styled/ListItem'

const ElementListItem = ({ element = {} }) =>
  <ListItem>{ element.name }</ListItem>

ElementListItem.propTypes = {
  element: PropTypes.object
}

export default ElementListItem
