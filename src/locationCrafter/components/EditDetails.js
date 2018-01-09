// @flow
import React from 'react'
import { css } from 'react-emotion'
import Content from './styled/Content'
import Form from './styled/Form'
import InputField from './styled/InputField'
import CancelButton from './styled/CancelButton'
import ConfirmButton from './styled/ConfirmButton'

type Values = {
  name: string,
  unique: boolean,
}

type Props = {
  values: Values,
  onValuesChange: (values: Values) => any,
  onCancel: () => any,
  onSave: () => any,
}

const styleClass = css`
  display: flex;

  > button {
    flex-grow: 1;
  }
`

const EditDetails = ({ values, onValuesChange, onCancel, onSave }: Props) =>
  <Content>
    <Form
      action='#'
      onSubmit={evt => {
        evt.preventDefault()
        onSave()
      }}
    >
      <InputField>
        <span>Name:</span>
        <input
          type='text'
          value={values.name}
          onChange={evt => onValuesChange({ ...values, name: evt.target.value })}
        />
      </InputField>
      <InputField horizontal>
        <input
          type='checkbox'
          value={values.unique}
          onChange={evt => onValuesChange({ ...values, unique: evt.target.checked })}
        />
        <span>Unique</span>
      </InputField>
      <div className={styleClass}>
        <CancelButton type='button' onClick={onCancel}>Cancel</CancelButton>
        <ConfirmButton>Save</ConfirmButton>
      </div>
    </Form>
  </Content>

export default EditDetails
