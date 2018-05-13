import React, { Component } from 'react'
import styled from 'styled-components'
import { Temperature } from './Temperature'
import { Summary } from './Summary'
import { Details } from './Details'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export class Weather extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Temperature temp={this.props.dat.temperature} />
        <Summary weather={this.props.dat.summary} />
        <Details
          wSpeed={this.props.dat.windSpeed}
          wGust={this.props.dat.windGust}
          humid={this.props.dat.humidity}
          cover={this.props.dat.cloudCover}
        />
      </Container>
    )
  }
}