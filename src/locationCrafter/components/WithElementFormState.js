// @flow
import * as React from 'react'
import type { Type, Element } from '../types'

class WithElementFormState extends React.Component<Props, State> {
  state = initializeState(this.props.element)

  onChange = (fields: { type?: Type, name?: string, unique?: boolean }) => {
    this.setState({
      ...fields,
      step: fields.type ? 'FILL_DETAILS' : 'SELECT_TYPE'
    })
  }

  onSubmit = () => {
    const {element} = this.props
    const {type, name, unique} = this.state
    if (type) {
      this.props.onSave({
        id: element && element.id,
        type,
        name,
        unique
      })
    } else {
      throw new Error(`Can't save Element without a 'type'.`)
    }
  }

  render () {
    return this.props.children({
      ...this.state,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
    })
  }
}

function initializeState (element) {
  return {
    type: element ? element.type : undefined,
    name: element ? element.name : '',
    unique: element ? element.unique : false,
    step: element && element.type
      ? 'FILL_DETAILS'
      : 'SELECT_TYPE'
  }
}

type Props = {
  element?: Element,
  onSave: (element: Element) => void,
  children: (props: RenderProps) => React.Node,
}

type RenderProps = State & {
  onChange: $PropertyType<WithElementFormState, 'onChange'>,
  onSubmit: () => void,
}

type State = {
  type?: Type,
  name: string,
  unique: boolean,
  step: 'SELECT_TYPE' | 'FILL_DETAILS',
}

export default WithElementFormState
