// @flow
import React from 'react'
import Content from './styled/Content'
import List from './styled/List'
import ListItemButton from './styled/ListItemButton'
import CancelButton from './styled/CancelButton'
import type { Type } from '../types'

type Props = {
  onCancel: () => any,
  onSelect: (type: Type) => any,
}

const ElementTypeSelect = ({ onCancel, onSelect }: Props) =>
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

export default ElementTypeSelect
