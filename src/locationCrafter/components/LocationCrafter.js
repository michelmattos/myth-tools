// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import WithElementsState from './WithElementsState'
import Page from './styled/Page'
import Header from './Header'
import ElementList from './ElementList'

const LocationCrafter = () => (
  <Page>
    <Header/>
    <WithElementsState>
      {({ locations, encounters, objects, saveElementIn }) =>
        <main>
          <Route
            path='/locations'
            render={() =>
              <ElementList
                elements={locations}
                onSave={saveElementIn('locations')}
              />
            }
          />
          <Route
            path='/encounters'
            render={() =>
              <ElementList
                elements={encounters}
                onSave={saveElementIn('encounters')}
              />
            }
          />
          <Route
            path='/objects'
            render={() =>
              <ElementList
                elements={objects}
                onSave={saveElementIn('objects')}
              />
            }
          />
        </main>
      }
    </WithElementsState>
  </Page>
)

export default LocationCrafter
