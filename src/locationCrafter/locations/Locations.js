import React from 'react'
import styled from 'react-emotion'
import List from './List'

const Locations = styled('div')`
  display: flex;
  flex-direction: column;
`

const Button = styled('button')`
  align-self: flex-start;
`

const defaultData = [
  { id: 0, name: 'Location 1', type: 'Custom' },
  { id: 1, name: 'Location 2', type: 'Custom' },
  { id: 2, name: 'Location 3', type: 'Custom' },
]

export default () =>
  <Locations>
    <Button>create element</Button>
    <List locations={defaultData} />
  </Locations>
