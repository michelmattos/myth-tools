import React from 'react'
import PropTypes from 'prop-types'
import { injectState } from 'freactal'
import Content from './styled/Content'
import ListItemButton from './styled/ListItemButton'
import ElementList from './ElementList'

const LocationsContent = ({
  state: {
    locations
  },
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
  state: PropTypes.shape({
    locations: PropTypes.array.isRequired
  }),
  effects: PropTypes.shape({
    toggleElementForm: PropTypes.func.isRequired
  }).isRequired
}

export default injectState(LocationsContent)
