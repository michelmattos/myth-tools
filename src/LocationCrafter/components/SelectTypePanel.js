import React from 'react'
import PropTypes from 'prop-types'
import Content from './styled/Content'
import List from './styled/List'
import ListItemButton from './styled/ListItemButton'
import CancelButton from './styled/CancelButton'

const SelectTypePanel = ({
  onCancel,
  onSelect
}) =>
  <Content>
    <List>
      <ListItemButton onClick={() => onSelect('CUSTOM')}>
        Custom
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('NONE')}>
        None
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('EXPECTED')}>
        Expected
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('SPECIAL')}>
        Special
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('RANDOM')}>
        Random
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('COMPLETE')}>
        Complete
      </ListItemButton>
    </List>
    <CancelButton onClick={onCancel}>Cancel</CancelButton>
  </Content>

SelectTypePanel.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectTypePanel
