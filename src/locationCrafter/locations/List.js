import React from 'react'
import styled from 'react-emotion'
import Item from './Item'

const List = styled('div')`
  margin: 1em 0;
`

export default ({ locations = [] }) =>
  <List>
    {locations.map(l =>
      <Item key={l.id} location={l} />
    )}
  </List>
