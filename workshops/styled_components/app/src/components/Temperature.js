import React from 'react'
import styled from 'styled-components'
import { FadeRight } from '../animation'

const Large = styled.p`
  font-size: 32px;
  animation: ${FadeRight} 0.5s ease-out 0s;
  text-align: center;
`

export const Temperature = ({ temp }) => <Large>{temp}°F</Large>
