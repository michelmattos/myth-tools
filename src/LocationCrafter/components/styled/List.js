import styled from 'react-emotion'

const List = styled('div')`
  > *:not(:last-child) {
    margin-bottom: .5em;
  }
`

export default List
