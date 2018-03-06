// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import capitalize from 'lodash-es/capitalize'
import upperFirst from 'lodash-es/upperFirst'
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
    const elements = this.state[category]
    this.setState({
      [category]: element.id !== undefined
        ? elements.map(updateElement(element))
        : elements.concat(createElement(element, elements.length))
    })
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

function updateElement (updatedElement: Element) {
  return (element: Element) =>
    updatedElement.id === element.id ? updatedElement : element
}

function createElement (newElement: Element, id: number) {
  return {
    ...newElement,
    id,
    name: newElement.type === 'CUSTOM'
      ? upperFirst(newElement.name)
      : capitalize(newElement.type)
  }
}

export default LocationCrafter
