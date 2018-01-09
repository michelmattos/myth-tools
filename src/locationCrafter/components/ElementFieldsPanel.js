import React from 'react'
import PropTypes from 'prop-types'
import { injectState } from 'freactal'
import { selectors } from '../state/elementForm'
import { css } from 'react-emotion'
import Content from './styled/Content'
import Form from './styled/Form'
import InputField from './styled/InputField'
import CancelButton from './styled/CancelButton'
import ConfirmButton from './styled/ConfirmButton'

const styleClass = css`
  display: flex;

  > button {
    flex-grow: 1;
  }
`

const ElementFieldsPanel = ({
  state: {
    name = '',
    unique = false
  },
  effects: {
    update,
    toggleElementForm,
    addLocation
  }
}) =>
  <Content>
    <Form
      action='#'
      onSubmit={evt => {
        evt.preventDefault()
        update({})
          .then(selectors.getElement)
          .then(element => element && addLocation(element))
      }}
    >
      <InputField>
        <span>Name:</span>
        <input type='text' value={name} onChange={evt => update({ name: evt.target.value })} />
      </InputField>
      <InputField horizontal>
        <input type='checkbox' value={unique} onChange={evt => update({ unique: evt.target.checked })} />
        <span>Unique</span>
      </InputField>
      <div className={styleClass}>
        <CancelButton type='button' onClick={toggleElementForm}>Cancel</CancelButton>
        <ConfirmButton>Save</ConfirmButton>
      </div>
    </Form>
  </Content>

ElementFieldsPanel.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    unique: PropTypes.bool
  }).isRequired,
  effects: PropTypes.shape({
    update: PropTypes.func.isRequired,
    toggleElementForm: PropTypes.func.isRequired,
    addLocation: PropTypes.func.isRequired
  }).isRequired
}

export default injectState(ElementFieldsPanel)
