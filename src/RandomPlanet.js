import React, { Component } from 'react'
import './RandomPlanet.css'
import SwapiService from './services/swapi-service'

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  constructor() {
    super()
  }

  componentDidMount() {
    this.updatePlanet()
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiService
      .getPlanet(id)
      .then(({ name, population, rotation_period, diameter }) => {
        this.setState({
          name: name,
          population: population,
          rotationPeriod: rotation_period,
          diameter: diameter,
        })
      })
  }

  render() {
    const { name, population, rotationPeriod, diameter } = this.state

    return (
      <div className="random-planet jumbotron rounded">
        <img
          alt=""
          className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
