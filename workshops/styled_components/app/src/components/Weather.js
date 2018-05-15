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

export const Weather = ({ dat }) => (
  <Container>
    <Temperature temp={dat.temperature} />
    <Summary weather={dat.summary} />
    <Details
      wSpeed={dat.windSpeed}
      wGust={dat.windGust}
      humid={dat.humidity}
      cover={dat.cloudCover}
    />
  </Container>
)
