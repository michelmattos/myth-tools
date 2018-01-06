import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { provideState, injectState } from 'freactal'
import * as state from '../state/page'
import PageHeader from './PageHeader'
import LocationsContent from './LocationsContent'
import ElementForm from './ElementForm'

const Page = ({
  state: {
    isElementFormOpen = false
  },
  effects
}) =>
  <div>
    <PageHeader />
    <main>
      <Route path='/locations' component={LocationsContent} />
    </main>
    {isElementFormOpen && (
      <ElementForm />
    )}
  </div>

Page.propTypes = {
  state: PropTypes.shape({
    isElementFormOpen: PropTypes.bool
  }).isRequired
}

export default provideState({
  initialState: state.getInitialState,
  effects: {
    toggleElementForm: () => state.toggleElementForm
  }
})(injectState(Page))
