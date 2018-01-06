import React from 'react'
import PropTypes from 'prop-types'
import { injectState } from 'freactal'
import Content from './styled/Content'
import ListItemButton from './styled/ListItemButton'
import ElementList from './ElementList'

const locations = [
  { id: 0, name: 'Location 1', type: 'Custom' },
  { id: 1, name: 'Location 2', type: 'Custom' },
  { id: 2, name: 'Location 3', type: 'Custom' },
]

const LocationsContent = ({
  effects: {
    toggleElementForm
  }
}) =>
  <Content>
    <ElementList elements={locations} />
    <ListItemButton onClick={toggleElementForm}>
      + element
    </ListItemButton>
  </Content>

LocationsContent.propTypes = {
  effects: PropTypes.shape({
    toggleElementForm: PropTypes.func.isRequired
  }).isRequired
}

export default injectState(LocationsContent)
