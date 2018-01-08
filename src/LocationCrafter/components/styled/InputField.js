import styled from 'react-emotion'

const InputField = styled('label')`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  width: 100%;

  > *:not(:last-child) {
    margin-right: ${props => props.horizontal ? '.5em' : '0'};
  }

  > input {
    padding: .5em;
  }
`

export default InputField
