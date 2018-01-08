import React from 'react'
import PropTypes from 'prop-types'
import { provideState, injectState } from 'freactal'
import {
  constants,
  getInitialState,
  actions,
  selectors
} from '../state/elementForm'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import SelectTypePanel from './SelectTypePanel'
import ElementFieldsPanel from './ElementFieldsPanel'

const ElementForm = ({
  state: {
    type = null,
    name = '',
    unique = false
  },
  effects: {
    addLocation,
    toggleElementForm,
    update
  }
}) =>
  <Overlay>
    <BottomPanel>
      {type === null ? (
        <SelectTypePanel
          onCancel={toggleElementForm}
          onSelect={type => update({ type })
            .then(selectors.getElement)
            .then(element => element && addLocation(element))
          }
        />
      ) : type === constants.CUSTOM ? (
        <ElementFieldsPanel />
      ) : null}
    </BottomPanel>
  </Overlay>

ElementForm.propTypes = {
  state: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    unique: PropTypes.bool
  }).isRequired,
  effects: PropTypes.shape({
    addLocation: PropTypes.func.isRequired,
    toggleElementForm: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }).isRequired
}

export default provideState({
  initialState: getInitialState,
  effects: {
    update: (_, fields) => state => actions.update(state, fields)
  }
})(injectState(ElementForm))
