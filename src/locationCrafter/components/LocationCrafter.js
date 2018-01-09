import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { provideState, injectState } from 'freactal'
import { getInitialState, actions } from '../state/locationCrafter'
import Page from './styled/Page'
import Header from './Header'
import LocationsContent from './LocationsContent'
import EditElement from './EditElement'

const LocationCrafter = ({
  state: {
    isElementFormOpen,
  },
  effects: {
    toggleElementForm,
    addLocation,
  },
}) =>
  <Page>
    <Header />
    <main>
      <Route path='/locations' component={LocationsContent} />
    </main>
    {isElementFormOpen && <EditElement onCancel={toggleElementForm} onSave={addLocation} />}
  </Page>

LocationCrafter.propTypes = {
  state: PropTypes.shape({
    isElementFormOpen: PropTypes.bool.isRequired
  }).isRequired
}

export default provideState({
  initialState: getInitialState,
  effects: {
    toggleElementForm: () => actions.toggleElementForm,
    addLocation: (_, location) => (state) => actions.addLocation(state, location)
  }
})(injectState(LocationCrafter))
