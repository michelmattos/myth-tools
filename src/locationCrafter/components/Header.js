import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './styled/PageHeader'
import Title from './styled/Title'
import Nav from './styled/Nav'

const Header = () =>
  <PageHeader>
    <Title>Location Crafter</Title>
    <Nav>
      <Link to='/locations'>Locations</Link>
      {' | '}
      <Link to='/encounters'>Encounters</Link>
      {' | '}
      <Link to='/objects'>Objects</Link>
    </Nav>
  </PageHeader>

export default Header
