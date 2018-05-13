import React from 'react'
import styled from 'styled-components'
import { FadeLeft } from '../animation'

const Large = styled.p`
  font-size: 20px;
  animation: ${FadeLeft} 0.5s ease-out 0s;
  text-align: center;
`

export const Summary = ({weather}) => (<Large>{weather}</Large>)