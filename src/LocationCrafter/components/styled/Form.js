import styled from 'react-emotion'

const Form = styled('form')`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`

export default Form
