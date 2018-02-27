// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import Page from './styled/Page'
import Header from './Header'
import ElementList from './ElementList'
import type { Element } from '../types'

type State = {
  locations: Array<Element>,
  encounters: Array<Element>,
  objects: Array<Element>,
}

class LocationCrafter extends React.Component<{}, State> {
  state = {
    locations: [],
    encounters: [],
    objects: [],
  }

  saveElementIn = (category: $Keys<State>) => (element: Element) => {
    let elements = this.state[category]

    if (element.id) {
      elements = elements.map(
        item => item.id === element.id ? element : item
      )
    }
    else {
      const newElement = { ...element, id: elements.length }
      elements = [...elements, newElement]
    }

    this.setState({ [category]: elements })
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
              <ElementList
                elements={locations}
                onSave={this.saveElementIn('locations')}
              />
            }
          />
          <Route
            path='/encounters'
            render={() =>
              <ElementList
                elements={encounters}
                onSave={this.saveElementIn('encounters')}
              />
            }
          />
          <Route
            path='/objects'
            render={() =>
              <ElementList
                elements={objects}
                onSave={this.saveElementIn('objects')}
              />
            }
          />
        </main>
      </Page>
    )
  }
}

export default LocationCrafter
