// @flow
import React from 'react'
import upperFirst from 'lodash/upperFirst'
import capitalize from 'lodash/capitalize'
import Run from '../../common/components/Run'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import ElementTypeSelect from './ElementTypeSelect'
import ElementDetailsForm from './ElementDetailsForm'
import type { Type, Element } from '../types'

type State = {
  id?: number,
  type: Type | null,
  name: string,
  unique: boolean,
}

type Props = {
  element: Element | null,
  onCancel: () => any,
  onSave: (location: Element) => any,
}

const initializeState = (element) => ({
  id: element ? element.id : undefined,
  type: element ? element.type : null,
  name: element ? element.name : '',
  unique: element ? element.unique : false,
})

class ElementEditor extends React.Component<Props, State> {
  state = initializeState(this.props.element)

  save = () => {
    const { id, type, name, unique } = this.state

    if (type) {
      this.props.onSave({
        id,
        type,
        name: type === 'CUSTOM' ? upperFirst(name) : capitalize(type),
        unique
      })
    }
    else
      throw new Error('Can\'t save location with null fields')
  }

  render () {
    const { type, name, unique } = this.state
    return (
      <Overlay>
        <BottomPanel>
          {type === null ? (
            <ElementTypeSelect
              onCancel={this.props.onCancel}
              onSelect={type => this.setState({ type })}
            />
          ) : type === 'CUSTOM' ? (
            <ElementDetailsForm
              values={{ name, unique }}
              onValuesChange={values => this.setState(values)}
              onCancel={this.props.onCancel}
              onSave={this.save}
            />
          ) : this.props.element === null ? (
            <Run cmd={this.save} />
          ) : null}
        </BottomPanel>
      </Overlay>
    )
  }
}

export default ElementEditor
