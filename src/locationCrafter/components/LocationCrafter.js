// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import Page from './styled/Page'
import Header from './Header'
import ElementList from './ElementList'
import type { Element, UnsavedElement } from '../types'

type State = {
  locations: Array<Element>,
  encounters: Array<Element>,
  objects: Array<Element>,
}

const addToList = (list: Array<Element>, element: UnsavedElement) => {
  const savedElement = {
    ...element,
    id: list.length,
  }
  return [...list, savedElement]
}

class LocationCrafter extends React.Component<{}, State> {
  state = {
    locations: [],
    encounters: [],
    objects: [],
  }

  addLocation = (location: UnsavedElement) => {
    const locations = addToList(this.state.locations, location)
    this.setState({ locations })
  }

  addEncounter = (encounter: UnsavedElement) => {
    const encounters = addToList(this.state.encounters, encounter)
    this.setState({ encounters })
  }

  addObject = (object: UnsavedElement) => {
    const objects = addToList(this.state.objects, object)
    this.setState({ objects })
  }

  render () {
    const { locations, encounters, objects } = this.state
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
          <Route
            path='/encounters'
            render={() =>
              <ElementList elements={encounters} onElementCreate={this.addEncounter} />
            }
          />
          <Route
            path='/objects'
            render={() =>
              <ElementList elements={objects} onElementCreate={this.addObject} />
            }
          />
        </main>
      </Page>
    )
  }
}

export default LocationCrafter
