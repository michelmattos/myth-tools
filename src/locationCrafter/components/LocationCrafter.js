// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import WithElementsState from './WithElementsState'
import Page from './styled/Page'
import Header from './Header'
import ElementList from './ElementList'

const LocationCrafter = () => (
  <WithElementsState>
    {({ locations, encounters, objects, saveElementIn }) =>
      <Page>
        <Header/>
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
      </Page>
    }
  </WithElementsState>
)

export default LocationCrafter
