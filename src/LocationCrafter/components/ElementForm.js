import React from 'react'
import PropTypes from 'prop-types'
import { injectState } from 'freactal'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import CategorySelectPanel from './CategorySelectPanel'

const ElementForm = ({
  effects: {
    toggleElementForm
  }
}) =>
  <Overlay>
    <BottomPanel>
      <CategorySelectPanel
        onCancel={toggleElementForm}
        onSelect={() => {}}
      />
    </BottomPanel>
  </Overlay>

ElementForm.propTypes = {
  effects: PropTypes.shape({
    toggleElementForm: PropTypes.func.isRequired
  }).isRequired
}

export default injectState(ElementForm)
