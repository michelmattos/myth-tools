import styled from 'react-emotion'

const ListItem = styled('div')`
  border: 1px solid black;
  padding: .5em;

  &:not(:last-child) {
    margin-bottom: .5em;
  }
`

export default ListItem
