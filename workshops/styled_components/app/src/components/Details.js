import React from 'react'
import styled from 'styled-components'
import { FadeUp } from '../animation'

const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: auto;
  animation: ${FadeUp} 1s ease-out 0s;
  font-size: 14px;
`

const Row = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`

export const Details = props => (
  <Container>
    <Row>
      <span>Wind Speed: {props.wSpeed}</span>Humidity: {props.humid}
      <span />
    </Row>
    <Row>
      <span>Wind Gust: {props.wGust}</span>Cloud Cover: {props.cover}
      <span />
    </Row>
  </Container>
)
