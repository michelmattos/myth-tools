// @flow
import React from 'react'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import WithElementFormState from './WithElementFormState'
import ElementTypeSelector from './ElementTypeSelector'
import ElementDetailsForm from './ElementDetailsForm'
import type { Element } from '../types'

type Props = {
  element?: Element,
  onCancel: () => any,
  onSave: (element: Element) => void,
}

const ElementEditor = (props: Props) => (
  <Overlay>
    <WithElementFormState onSave={props.onSave}>
      {({ name, unique, step, onChange, onSubmit }) =>
        <BottomPanel>
          {step === 'SELECT_TYPE' &&
            <ElementTypeSelector
              onCancel={props.onCancel}
              onSelect={type => onChange({type})}
            />
          }
          {step === 'FILL_DETAILS' &&
            <ElementDetailsForm
              values={{ name, unique }}
              onValuesChange={values => onChange({...values})}
              onCancel={props.onCancel}
              onSave={onSubmit}
            />
          }
        </BottomPanel>
      }
    </WithElementFormState>
  </Overlay>
)

export default ElementEditor
