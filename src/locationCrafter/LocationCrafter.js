import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'react-emotion'
import Locations from './locations/Locations'

const Title = styled('h3')`
  color: white;
  font-size: 1.5em;
  margin: 0;
`

const Nav = styled('nav')`
  margin-top: 1em;
`

const Header = styled('header')`
  background-color: #00b6ff;
  padding: 1em;
`

const Content = styled('main')`
  padding: 1em;
`

export default () =>
  <div>
    <Header>
      <Title>Location Crafter</Title>
      <Nav>
        <Link to='/locations'>Locations</Link>
        {' | '}
        <Link to='/encounters'>Encounters</Link>
        {' | '}
        <Link to='/objects'>Objects</Link>
      </Nav>
    </Header>

    <Content>
      <Route path='/locations' component={Locations} />
    </Content>
  </div>
