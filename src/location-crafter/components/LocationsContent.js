import React from 'react'
import { css } from 'react-emotion'
import Button from './styled/Button'
import ElementList from './ElementList'

const styleClass = css`
  display: flex;
  flex-direction: column;
`

const locations = [
  { id: 0, name: 'Location 1', type: 'Custom' },
  { id: 1, name: 'Location 2', type: 'Custom' },
  { id: 2, name: 'Location 3', type: 'Custom' },
]

const LocationsContent = () =>
  <div className={styleClass}>
    <Button>create element</Button>
    <ElementList elements={locations} />
  </div>

export default LocationsContent
