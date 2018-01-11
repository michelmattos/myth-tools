import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'react-emotion'
import PageHeader from './styled/PageHeader'
import Title from './styled/Title'
import Nav from './styled/Nav'

const active = css`
  text-decoration: none;
  color: white;
`

const Header = () =>
  <PageHeader>
    <Title>Location Crafter</Title>
    <Nav>
      <NavLink to='/locations' activeClassName={active}>Locations</NavLink>
      {' | '}
      <NavLink to='/encounters' activeClassName={active}>Encounters</NavLink>
      {' | '}
      <NavLink to='/objects' activeClassName={active}>Objects</NavLink>
    </Nav>
  </PageHeader>

export default Header
