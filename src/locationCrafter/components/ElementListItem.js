// @flow
import React from 'react'
import ListItem from './styled/ListItem'
import type { Element } from '../types'

type Props = {
  element: Element
}

const ElementListItem = ({ element }: Props) =>
  <ListItem>{element.name} {element.unique && '(U)'}</ListItem>

export default ElementListItem
