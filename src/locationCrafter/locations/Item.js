import React from 'react'
import styled from 'react-emotion'

const Item = styled('div')`
  border: 1px solid black;
  padding: .5em;

  &:not(:last-child) {
    margin-bottom: .5em;
  }
`

export default ({ location = {} }) =>
  <Item>{ location.name }</Item>
