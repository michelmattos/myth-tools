// @flow
import React from 'react'
import upperFirst from 'lodash/upperFirst'
import capitalize from 'lodash/capitalize'
import Run from '../../common/components/Run'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import SelectType from './SelectType'
import EditDetails from './EditDetails'
import type { Type, Element, UnsavedElement } from '../types'

type State = {
  type: Type | null,
  name: string,
  unique: boolean,
}

type Props = {
  onCancel: () => any,
  onSave: (location: Element | UnsavedElement) => any,
}

class EditElement extends React.Component<Props, State> {
  state = {
    type: null,
    name: '',
    unique: false,
  }

  canSave = () => this.state.type && this.state.name !== ''

  save = () => {
    const { type, name, unique } = this.state
    if (type)
      this.props.onSave({
        type,
        name: type === 'CUSTOM' ? upperFirst(name) : capitalize(type),
        unique
      })
    else
      throw new Error('Can\'t save location with null fields')
  }

  render () {
    const { type, name, unique } = this.state
    return (
      <Overlay>
        <BottomPanel>
          {type === null ? (
            <SelectType
              onCancel={this.props.onCancel}
              onSelect={type => this.setState({ type })}
            />
          ) : type === 'CUSTOM' ? (
            <EditDetails
              values={{ name, unique }}
              onValuesChange={values => this.setState(values)}
              onCancel={this.props.onCancel}
              onSave={this.save}
            />
          ) : (
            <Run cmd={this.save} />
          )}
        </BottomPanel>
      </Overlay>
    )
  }
}

export default EditElement
