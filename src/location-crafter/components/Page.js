import React from 'react'
import { Route } from 'react-router-dom'
import Content from './styled/Content'
import PageHeader from './PageHeader'
import LocationsContent from './LocationsContent'

const Page = () =>
  <div>
    <PageHeader />
    <Content>
      <Route path='/locations' component={LocationsContent} />
    </Content>
  </div>

export default Page
