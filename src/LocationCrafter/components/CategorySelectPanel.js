import React from 'react'
import { css } from 'react-emotion'
import Content from './styled/Content'
import List from './styled/List'
import ListItemButton from './styled/ListItemButton'

const CategorySelectPanel = () =>
  <Content>
    <List>
      <ListItemButton>Custom</ListItemButton>
      <ListItemButton>None</ListItemButton>
      <ListItemButton>Expected</ListItemButton>
      <ListItemButton>Special</ListItemButton>
      <ListItemButton>Random</ListItemButton>
      <ListItemButton>Complete</ListItemButton>
    </List>
  </Content>

export default CategorySelectPanel
