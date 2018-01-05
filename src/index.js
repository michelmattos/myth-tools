import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'react-emotion'
import { BrowserRouter } from 'react-router-dom'
import LocationCrafter from './location-crafter'
import './style.css'

const app = css`
  font-family: Oxygen, sans-serif;
`

const App = () =>
  <div className={app}>
    <BrowserRouter>
      <LocationCrafter />
    </BrowserRouter>
  </div>

ReactDOM.render(<App />, document.getElementById('root'));
