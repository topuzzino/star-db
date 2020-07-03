import React from 'react'

import Header from './Header'
import RandomPlanet from './RandomPlanet'
import ListItem from './ListItem'
import Person from './Person'

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ListItem />
        </div>
        <div className="col-md-6">
          <Person />
        </div>
      </div>
    </div>
  )
}

export default App
