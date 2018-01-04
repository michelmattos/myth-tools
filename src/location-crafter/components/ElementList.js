import React from 'react'
import PropTypes from 'prop-types'
import List from './styled/List'
import ElementListItem from './ElementListItem'

const ElementList = ({ elements = [] }) =>
  <List>
    {elements.map(element =>
      <ElementListItem key={element.id} element={element} />
    )}
  </List>

ElementList.propTypes = {
  elements: PropTypes.array
}

export default ElementList
