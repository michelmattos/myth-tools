import styled from 'react-emotion'

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1em;

  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`

export default Content
