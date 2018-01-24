// @flow
import React from 'react'
import ListItem from './styled/ListItem'
import type { Element } from '../types'

type Props = {
  element: Element,
  onClick: () => any,
}

const ElementListItem = ({ element, onClick }: Props) =>
  <ListItem onClick={onClick}>
    {element.name} {element.unique && '(U)'}
  </ListItem>

export default ElementListItem
