// @flow
import React from 'react'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import ElementTypeSelector from './ElementTypeSelector'
import ElementDetailsForm from './ElementDetailsForm'
import type { Type, Element } from '../types'

type State = {
  type?: Type,
  name: string,
  unique: boolean,
  step: 'SELECT_TYPE' | 'FILL_DETAILS',
}

type Props = {
  element?: Element,
  onCancel: () => any,
  onSave: (element: Element) => any,
}

class ElementEditor extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const { element } = props
    this.state = {
      type: element ? element.type : undefined,
      name: element ? element.name : '',
      unique: element ? element.unique : false,
      step: element && element.type
        ? 'FILL_DETAILS'
        : 'SELECT_TYPE'
    }
  }

  updateFields = (fields: { type?: Type, name?: string, unique?: boolean }) => {
    this.setState({
      ...fields,
      step: fields.type ? 'FILL_DETAILS' : 'SELECT_TYPE'
    })
  }

  saveElement = () => {
    const { element } = this.props
    const { type, name, unique } = this.state
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
    const { name, unique, step } = this.state
    return (
      <Overlay>
        <BottomPanel>
          {step === 'SELECT_TYPE' &&
            <ElementTypeSelector
              onCancel={this.props.onCancel}
              onSelect={type => this.updateFields({type})}
            />
          }
          {step === 'FILL_DETAILS' &&
            <ElementDetailsForm
              values={{ name, unique }}
              onValuesChange={values => this.updateFields({...values})}
              onCancel={this.props.onCancel}
              onSave={this.saveElement}
            />
          }
        </BottomPanel>
      </Overlay>
    )
  }
}

export default ElementEditor
