// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import Page from './styled/Page'
import Header from './Header'
import ElementList from './ElementList'
import EditElement from './EditElement'
import type { Element, UnsavedElement } from '../types'

type State = {
  locations: Array<Element>,
}

class LocationCrafter extends React.Component<{}, State> {
  state = {
    locations: []
  }

  addLocation = (location: UnsavedElement) => {
    const { locations } = this.state
    const savedLocation = {
      ...location,
      id: locations.length,
    }
    this.setState({ locations: [...locations, savedLocation] })
  }

  render () {
    const { locations } = this.state
    return (
      <Page>
        <Header />
        <main>
          <Route
            path='/locations'
            render={() =>
              <ElementList elements={locations} onElementCreate={this.addLocation} />
            }
          />
        </main>
      </Page>
    )
  }
}

export default LocationCrafter
