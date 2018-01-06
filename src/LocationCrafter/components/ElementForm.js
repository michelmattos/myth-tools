import React from 'react'
import Overlay from './styled/Overlay'
import BottomPanel from './styled/BottomPanel'
import CategorySelectPanel from './CategorySelectPanel'

const ElementForm = () =>
  <Overlay>
    <BottomPanel>
      <CategorySelectPanel />
    </BottomPanel>
  </Overlay>

export default ElementForm
