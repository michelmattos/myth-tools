import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './styled/ListItem'

const ElementListItem = ({ element = {} }) =>
  <ListItem>{ element.name} {element.unique && '(U)'}</ListItem>

ElementListItem.propTypes = {
  element: PropTypes.object
}

export default ElementListItem
