import React from 'react'
import { Link } from 'react-router-dom'
import Header from './styled/Header'
import Title from './styled/Title'
import Nav from './styled/Nav'

const PageHeader = () =>
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

export default PageHeader
